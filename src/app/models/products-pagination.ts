import { Product } from "./product";

export interface ProductPagination{
    allProducts : Product[],
    productsInPage : Product[]
    paginationSize : number,
    currentPage : number,
    totalPages : number
}