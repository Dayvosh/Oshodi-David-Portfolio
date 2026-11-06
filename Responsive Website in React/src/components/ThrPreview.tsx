const A = "/assets"

export default function ThrPreview() {
  return (
    <div className="thr-image-wrap" aria-hidden="true">
      <img src={`${A}/THR.svg`} alt="" draggable={false} />
    </div>
  )
}
