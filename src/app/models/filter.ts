import { Category } from "./category";

export interface Filter{
    categories :  Category[],
    minPrice : number | undefined,
    maxPrice : number | undefined,
    minRatings : number | undefined,
    maxRatings : number | undefined,
}