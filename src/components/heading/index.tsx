import { THeading } from "./type";

import styles from "./heading.module.css"
import React from "react";

const Heading: React.FC<THeading> = ({ text, type = 'h1' }) => {
  return (
    type === 'h1' ? <h1 className={styles.heading}>{text}</h1> : <h2 className={styles.sub_heading}>{text}</h2>
  )
}

export { Heading }
