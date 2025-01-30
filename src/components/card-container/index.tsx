import Loading from "../loading"
import Card from "./card"
import styles from './card-container.module.css'

import { useAppSelector } from "../../store"

export default function CardContainer() {
  const { data, status, error } = useAppSelector((state) => state.games)

  return (
    <div className={styles.card__container}>
      {status === 'loading' && <Loading />}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && data?.map((card) => (
        <Card
          key={card.id}
          gameName={card.title}
          thumbnail={{ src: card.thumbnail, alt: card.title }}
          paragraphContent={card.shortDescription}
          pageId={card.id}
        />
      ))}
    </div>
  )
}
