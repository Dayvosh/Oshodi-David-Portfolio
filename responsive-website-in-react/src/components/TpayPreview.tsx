const A = "/assets"

export default function TpayPreview() {
  return (
    <div className="tpay-image-wrap" aria-hidden="true">
      <img
        src={`${A}/Tpay-preview.webp`}
        width={710}
        height={505}
        alt=""
        draggable={false}
      />
    </div>
  )
}
