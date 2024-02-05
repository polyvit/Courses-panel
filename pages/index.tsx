import { HTag, PTag, Rating, Tag } from "../components";
import { Button } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  return (
    <>
      <h1>Hello</h1>
      <HTag tag="h3">Text from HTag</HTag>
      <Button appearance="primary" arrow="right">
        Text 1
      </Button>
      <Button appearance="ghost" arrow="down">
        Text 2
      </Button>
      <PTag>Lorem ipsum dolor sit amet consectetur</PTag>
      <PTag size="s">Lorem ipsum dolor sit amet consectetur</PTag>
      <Tag size="m" color="green">
        10 000
      </Tag>
      <Rating rating={1} setRating={() => {}} isEditable />
    </>
  );
}

export default withLayout(Home);
