import { TCard } from "./type";

import { Heading } from "../../heading";
import Paragraphs from "../../paragraphs";
import Thumbnail from "../../thumbnail";
import Button from "../../button";

import styles from "./card.module.css"

const Card: React.FC<TCard> = ({ gameName, thumbnail, paragraphContent, pageId }) => {
  return(
    <div className={styles.card}>
      <Heading text={gameName} type="h1" />
      <div className={styles.card__thumbnail_description_container}>
        <Thumbnail src={thumbnail.src} alt={thumbnail.alt} />
        <div className={styles.card__description_container}>
          <Paragraphs content={paragraphContent} />
          <Button label="View More" url={`/details-page/${pageId}`}/>
        </div>
      </div>
    </div>
  )
}

export default Card
