const A = '/assets'

export default function TpayPreview() {
  return (
    <div className="tpay-image-wrap" aria-hidden="true">
      <img src={`${A}/Tpay.svg`} alt="" draggable={false} />
    </div>
  )
}
