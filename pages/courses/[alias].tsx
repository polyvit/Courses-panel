import axios from "axios";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../types/menu.types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { TopPageModel } from "../../types/page.types";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../types/product.types";

const firstCategory = 0;

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <></>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    paths: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  console.log("params", params);
  if (!params) {
    return { notFound: true };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  const { data: page } = await axios.get<TopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find/",
    { category: page.category, limit: 10 }
  );
  return {
    props: { menu, firstCategory, page, products },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}
