import { useNavigate } from "react-router"

import { TButton } from "./type"
import styles from "./button.module.css"

const Button: React.FC<TButton> = ({ url, label }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (typeof url !== 'string') {
      return navigate(url as number)
    }

    return navigate(url)
  }

  return (
    <button
      onClick={handleClick}
      className={styles.button}
    >
      {label !== 'Back' ?  <span> View More &gt; </span> :  <span> &lt; Back </span>}
    </button>
  )
}

export default Button
