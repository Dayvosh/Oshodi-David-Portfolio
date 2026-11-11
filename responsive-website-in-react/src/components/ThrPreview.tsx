const A = "/assets"

export default function ThrPreview() {
  return (
    <div className="thr-image-wrap" aria-hidden="true">
      <img
        src={`${A}/THR-preview-hq.webp`}
        width={710}
        height={504}
        alt=""
        draggable={false}
      />
    </div>
  )
}
