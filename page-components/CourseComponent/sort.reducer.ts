import { SortEnum } from "../../components/Sort/Sort.types";
import { ProductModel } from "../../types/product.types";

export type SortActions = {type: SortEnum} | {type: SortEnum.Rating} | {type: "reset", initialState: ProductModel[]}

export interface SortReducerState {
    sort: SortEnum;
    products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions) => {
    switch(action.type) {
        case SortEnum.Rating: {
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating - b.initialRating)
            }
        };
        case SortEnum.Price: {
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price - b.price)
            }
        }
        case "reset": {
            return {
                sort: SortEnum.Price,
                products: action.initialState
            }
        }
        default: {
            throw new Error("Некорректная сортировки")
        }
    }
}