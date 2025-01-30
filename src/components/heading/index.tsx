import { THeading } from "./type";

const Heading: React.FC<THeading> = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

export default Heading
