import { Heading } from '../heading'
import { TGameInfo } from "./type"

import styles from "./game-info.module.css"

const GameInfo: React.FC<TGameInfo> = ({ title, description }) => {
  return (
    <div className={styles.game_info_container}>
      <Heading text={title} />
      <p className={styles.game_info_paragraph}>{description}</p>
    </div>
  )
}

export default GameInfo
