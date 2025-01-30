import { TThumbnail } from "./type"

const Thumbnail: React.FC<TThumbnail> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} />
  )
}

export default Thumbnail
