import { GetStaticProps } from "next";
import { HTag, Input, PTag, Rating, Tag, Textarea } from "../components";
import { Button } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../types/menu.types";
import { Search } from "../components";
import { API } from "../helpers/api";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
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
      <Input />
      <Textarea />
      <Search />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
