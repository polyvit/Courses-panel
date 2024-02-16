import axios from "axios";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../types/menu.types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { TopLevelCategory, TopPageModel } from "../../types/page.types";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../types/product.types";
import { firstLevelMenu } from "../../helpers/helpers";
import { CourseComponent } from "../../page-components";
import { API } from "../../helpers/api";

function Course({ firstCategory, page, products }: CourseProps): JSX.Element {
  return (
    <CourseComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });
    paths = paths.concat(
      menu.flatMap((el) => el.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return { notFound: true };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });
    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel>(
      API.topPage.byAlias + params.alias
    );
    const { data: products } = await axios.post<ProductModel[]>(
      API.product.find,
      { category: page.category, limit: 10 }
    );
    return {
      props: { menu, firstCategory: firstCategoryItem.id, page, products },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
