---
name: asset-section-sync
description: Use when the user provides a design asset (usually an SVG) for a portfolio case study section and asks to sync the website's content/layout to match it. Covers TPay, ALATbyWEMA, THR, and Truck App case studies.
---

# Asset Section Sync

Use this workflow when the user supplies a section asset (for example `Assets/Tpay/Problem.svg`) and asks to compare it with the live case study section, adding what is missing and removing what is not in the asset.

## Ground rules

- Change **content and section layout only**. Do not change typography, font size, weight, colors, spacing, or existing CSS classes unless explicitly asked.
- Keep section structure in `src/lib/caseStudies.tsx` and presentation in `src/components/CaseStudy.tsx`.
- Preserve wording from the asset exactly, including capitalization and punctuation, unless the user says otherwise.
- Do not modify other case studies while editing one section.

## Project locations

- Case study data: `responsive-website-in-react/src/lib/caseStudies.tsx`
- Case study renderer: `responsive-website-in-react/src/components/CaseStudy.tsx`
- Global styles: `responsive-website-in-react/src/app/globals.css`
- Design assets: `Assets/<StudyName>/<Section>.svg` (for example `Assets/Tpay/Problem.svg`)
- Public assets used by the site: `responsive-website-in-react/public/assets`

## Workflow

1. **Locate the asset** for the requested section and case study.
2. **Extract the asset content.** Many exported SVGs have text converted to paths, so `<text>` elements may not exist.
   - Render the SVG to PNG with headless Chrome:
     ```bash
     "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
       --headless --disable-gpu --hide-scrollbars \
       --window-size=<width>,<height> \
       --screenshot="/tmp/<section>.png" \
       "file:///absolute/path/to/Asset.svg"
     ```
   - OCR the PNG with macOS Vision (Swift):
     ```bash
     cat > /tmp/ocr.swift <<'EOF'
     import Foundation
     import Vision
     import AppKit
     let path = CommandLine.arguments[1]
     guard let img = NSImage(contentsOfFile: path),
           let tiff = img.tiffRepresentation,
           let bitmap = NSBitmapImageRep(data: tiff),
           let cg = bitmap.cgImage else { exit(1) }
     let request = VNRecognizeTextRequest { req, _ in
       guard let obs = req.results as? [VNRecognizedTextObservation] else { return }
       for o in obs {
         if let t = o.topCandidates(1).first {
           let b = o.boundingBox
           print(String(format: "[y=%.3f x=%.3f] %@", 1-b.origin.y, b.origin.x, t.string))
         }
       }
     }
     request.recognitionLevel = .accurate
     request.usesLanguageCorrection = true
     try? VNImageRequestHandler(cgImage: cg, options: [:]).perform([request])
     EOF
     swift /tmp/ocr.swift /tmp/<section>.png
     ```
   - Use the OCR order and coordinates to reconstruct headings, order, and grouping.
3. **Read the current section** in `caseStudies.tsx` and the renderer in `CaseStudy.tsx`.
4. **Compare** eyebrow, title, intro, media/screenshots, list headings, and list items. List exactly what is extra, missing, and changed.
5. **Update the data**:
   - Remove fields/elements present on the site but absent from the asset.
   - Add missing headings/items.
   - Replace changed copy with the asset's wording.
   - If removing a previously required field, make the TypeScript type optional and render it conditionally instead of leaving empty markup.
6. **Do not restyle.** Reuse existing JSX elements and class names.
7. **Verify** with `npx tsc --noEmit` from `responsive-website-in-react`.

## Adding artwork or images from an asset

When the asset includes a picture, phone mockup, or other artwork that is missing from the site:

1. **Find the artwork bounds** in the SVG. Inspect the root children to separate text groups from artwork groups:
   ```bash
   python3 - <<'EOF'
   import xml.etree.ElementTree as ET
   root = ET.parse("Assets/Tpay/Goals.svg").getroot()
   def local(t): return t.split("}")[-1]
   for i, ch in enumerate(root):
       a = {k.split("}")[-1]: v for k, v in ch.attrib.items()}
       print(i, local(ch.tag), len(list(ch.iter())), a.get("x"), a.get("y"), a.get("width"), a.get("height"), a.get("fill"))
   EOF
   ```
   Text is usually exported as one or more top-level `<path>` elements. Artwork is usually one or more top-level `<g>` elements plus the shared `<defs>`.
2. **Extract only the artwork** into a new standalone SVG in `responsive-website-in-react/public/assets/`. Keep the original element ids so `defs` references (clip paths, patterns) still resolve. Set the new `viewBox` to the artwork's exact bounds.
3. **Measure the grey container** in the asset. In Figma exports it is usually a large rounded `<rect>` behind the artwork (for example `x=120 y=430 width=925 height=677 rx=32 fill=#F0F0F0`).
4. **Render the container with existing site conventions, not the asset's raw radius.** The portfolio standard for large case-study media containers is:
   ```css
   .case-<section>-visual {
     width: 100%;
     aspect-ratio: <container-width> / <container-height>;
     margin-top: 56px;
     border-radius: 12px;
     background: #f2f2f2;
     display: flex;
     align-items: center;
     justify-content: center;
     overflow: hidden;
   }
   .case-<section>-visual img {
     display: block;
     width: <artwork-width / container-width as %>;
     height: <artwork-height / container-height as %>;
     object-fit: contain;
   }
   ```
   Use `12px` for the container radius, matching `.case-reviews`, `.case-final-visual`, and `.case-final-illustration`. Do not use the asset's larger radius unless the user explicitly asks for it.
   If the whole container is exported as one transparent PNG at the container's aspect ratio (for example a multi-screen group), set `framed: true` on the `CaseFinalVisual` instead of adding more CSS. `.case-final-image.is-framed` already supplies the grey `#f2f2f2` container, `12px` radius, and full-size artwork.
5. **Keep the artwork at its exact relative size.** Calculate the percentages from the asset coordinates rather than eyeballing:
   - `width% = artwork-width / container-width * 100`
   - `height% = artwork-height / container-height * 100`
   - If the artwork is centered in the asset, use flex centering instead of absolute offsets.
6. **Wire it into the section data** as an optional `visual: { src, alt }` field and render it conditionally, so other case studies are unaffected:
   ```tsx
   {section.visual ? (
     <div className="case-<section>-visual">
       <img src={section.visual.src} alt={section.visual.alt} />
     </div>
   ) : null}
   ```
7. **Verify the extraction** by rendering the new asset with headless Chrome and OCR/visual comparison before wiring it in.

Worked example (TPay Goals):
- Container: `925 x 677`
- Artwork bounds: `x=309.664 y=494.918 width=545.672 height=547.164`
- Artwork size: `58.99%` wide, `80.82%` tall
- Output: `public/assets/tpay-goals-phones.svg`

## Section data shape reference

- `eyebrow`: small section label, e.g. `THE PROBLEM`
- `title`: section heading
- `intro`: optional supporting paragraph
- `screenshots` / `screenshotsLabel`: optional image strip
- `coreProblems`: array of `{ title, body }`
- `goals.visual`: optional `{ src, alt }` rendered inside a grey media container
- `oldUi`: optional before/after image block
- Renderer always prints the `Core Problems` subheading when `coreProblems` exists.

## Notes

- Do not trust OCR blindly for punctuation. Cross-check spacing and sentence boundaries from multiple OCR passes or the design context.
- If the asset lacks an element (intro, screenshots, etc.), treat that as an intentional removal, matching the user's prior TPay and ALATbyWEMA instructions.
- Report the diff to the user briefly: what was removed, added, and replaced.
