import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../types/product.types";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel; 
}