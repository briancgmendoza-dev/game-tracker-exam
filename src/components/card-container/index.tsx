import { useAppSelector } from "../../store"
import Card from "./card"
import styles from './card-container.module.css'

export default function CardContainer() {
  const { data, status, error } = useAppSelector((state) => state.games)

  return (
    <div className={styles.card_container}>
      {status === 'loading' && <p>Loading...</p>}
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
