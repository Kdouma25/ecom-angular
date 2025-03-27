import { Filter } from "../filter"
import { Product } from "../product"

export interface ProductPageState{
    allProducts : Product[],
    filtredProducts : Product[] | undefined
    paginatedProducts : Product[]
    paginationSize : number,
    currentPage : number,
    totalPages : number,
    isFilterOveryalyShown : boolean,
    appliedFilter : Filter
}