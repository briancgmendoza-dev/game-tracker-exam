import { TThumbnail } from "./type"

import styles from "./thumbnail.module.css"

const Thumbnail: React.FC<TThumbnail> = ({ src, alt }) => {
  if (!src || !alt) return
  return (
    <img src={import.meta.env.VITE_IMAGE_URL + src} alt={alt} className={styles.thumbnail} />
  )
}

export default Thumbnail
