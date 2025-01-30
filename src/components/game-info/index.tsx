import { Heading } from '../heading'
import { TGameInfo } from "./type"

import styles from "./game-info.module.css"
import Paragraphs from '../paragraphs'

const GameInfo: React.FC<TGameInfo> = ({ title, description }) => {
  return (
    <div className={styles.game_info__container}>
      <Heading text={title} type='h1' />
      <Paragraphs className={styles.game_info__paragraph} content={description} />
    </div>
  )
}

export default GameInfo
