import { SubHeading } from "../heading"
import { TGameMinimumSystemRequirements } from "../../types"

import styles from "./system-requirements.module.css"

const SystemRequirements: React.FC<TGameMinimumSystemRequirements> = ({ graphics, memory, os, processor, storage }) => {
  return (
    <div className={styles.system_requirements_container}>
      <SubHeading text="Graphics" />
      <p className={styles.system_requirements_paragraph}>{graphics}</p>

      <SubHeading text="Memory" />
      <p className={styles.system_requirements_paragraph}>{memory}</p>

      <SubHeading text="Operating System" />
      <p className={styles.system_requirements_paragraph}>{os}</p>

      <SubHeading text="Processor" />
      <p className={styles.system_requirements_paragraph}>{processor}</p>

      <SubHeading text="Storage" />
      <p className={styles.system_requirements_paragraph}>{storage}</p>
    </div>
  )
}

export default SystemRequirements
