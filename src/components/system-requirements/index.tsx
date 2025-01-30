import { Heading } from "../heading"
import { TGameMinimumSystemRequirements } from "../../types"

import styles from "./system-requirements.module.css"
import Paragraphs from "../paragraphs"

const SystemRequirements: React.FC<TGameMinimumSystemRequirements> = ({ graphics, memory, os, processor, storage }) => {
  return (
    <div className={styles.system_requirements__container}>
      <Heading text="Graphics" type="h2"/>
      <Paragraphs content={graphics} className={styles.system_requirements__paragraph}/>

      <Heading text="Memory" type="h2"/>
      <Paragraphs content={memory} className={styles.system_requirements__paragraph} />

      <Heading text="Operating System" type="h2"/>
      <Paragraphs content={os} className={styles.system_requirements__paragraph} />

      <Heading text="Processor" type="h2"/>
      <Paragraphs content={processor} className={styles.system_requirements__paragraph} />

      <Heading text="Storage" type="h2"/>
      <Paragraphs content={storage} className={styles.system_requirements__paragraph} />
    </div>
  )
}

export default SystemRequirements
