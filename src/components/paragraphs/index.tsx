import { TParagraphs } from "./type";

const Paragraphs: React.FC<TParagraphs> = ({ content, className }) => {
  return (
    <p className={className}>
      {content}
    </p>
  )
}

export default Paragraphs
