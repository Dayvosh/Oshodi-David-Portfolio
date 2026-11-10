const A = "/assets"

export default function Icon({
  file,
  alt = "",
  className,
}: {
  file: string
  alt?: string
  className?: string
}) {
  return <img className={className} src={`${A}/${file}`} alt={alt} />
}
