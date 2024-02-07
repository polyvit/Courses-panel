import { TopLevelCategory, TopPageModel } from "../../types/page.types";
import { ProductModel } from "../../types/product.types";

export interface CourseComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
