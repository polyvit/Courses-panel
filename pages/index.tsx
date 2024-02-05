import { HTag, PTag, Tag } from "../components";
import { Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
