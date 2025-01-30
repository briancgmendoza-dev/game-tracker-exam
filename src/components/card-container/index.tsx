import Heading from "../heading";
import Paragraphs from "../paragraphs";
import Thumbnail from "../thumbnail";
import Button from "../button";

export default function CardContainer() {
  const pageId = 1
  return (
    <div>
      <Heading text="game-name" />
      <div>
        <Thumbnail src="game-name-url" alt="game-name" />
        <div>
          <Paragraphs content="game game game" />
          <Button label="View More" url={`/details-page/${pageId}`}/>
        </div>
      </div>
    </div>
  )
}
