import { Product } from "../product"

export interface ProductPageState{
    allProducts : Product[],
    paginatedProducts : Product[]
    paginationSize : number,
    currentPage : number,
    totalPages : number
}