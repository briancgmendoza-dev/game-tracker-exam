import { THeading } from "./type";

import styles from "./heading.module.css"
import React from "react";

const Heading: React.FC<THeading> = ({ text }) => {
  return (
    <h1 className={styles.heading}>{text}</h1>
  )
}

const SubHeading: React.FC<THeading> = ({ text }) => {
  return (
    <h2 className={styles.sub_heading}>{text}</h2>
  )
}

export { Heading, SubHeading }
