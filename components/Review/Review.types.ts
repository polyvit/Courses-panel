import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReviewModel } from "../../types/product.types";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel;
}