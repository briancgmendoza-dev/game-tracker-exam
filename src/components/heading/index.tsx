import { THeading } from "./type";

import styles from "./heading.module.css"

const Heading: React.FC<THeading> = ({ text }) => {
  return (
    <h1 className={styles.heading}>{text}</h1>
  )
}

export default Heading
