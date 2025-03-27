import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, signal } from '@angular/core';
import { Observable} from 'rxjs';
import { ProductPageState } from '../models/states/productPageState';
import { Product } from '../models/product';
import { Category } from '../models/category';


const API_URL = "http://localhost:3000/products";


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  PAGINATION_SIZE = 5;

  private _productPageState = signal<ProductPageState>({
    allProducts: Array<Product>(),
    filtredProducts : undefined,
    paginatedProducts: Array<Product>(),
    paginationSize: this.PAGINATION_SIZE,
    currentPage: 1,
    totalPages: 1,
    isFilterOveryalyShown : true,
    appliedFilter : {
      categories :  [],
      minPrice : undefined,
      maxPrice : undefined,
      minRatings : undefined,
      maxRatings : undefined
    }
  })

  
  readonly productPageState = computed(this._productPageState)



  constructor(private http: HttpClient) {

  }

  init(): void {
    this.http.get<Product[]>(API_URL).subscribe({
      next: (products) => {
        const startEndIndexes = this.calculateStartAndIndexes(products.length,1);
        this._productPageState.set({
          ...this._productPageState(),
           allProducts: products,
           paginatedProducts : products.slice(startEndIndexes[0],startEndIndexes[1]),
           paginationSize : this.PAGINATION_SIZE,
           currentPage : 1,
           totalPages : Math.ceil(products.length/this.PAGINATION_SIZE)
        })
      }
    }
    
    );
  }



  calculateStartAndIndexes(productsSize: number, currentPage: number) {
    const startIndex = Math.min(this.PAGINATION_SIZE * (currentPage - 1), productsSize)
    const endIndex = Math.min(startIndex + this.PAGINATION_SIZE, productsSize)
    return [startIndex, endIndex]
  }



  setCurrentPage(currentPage : number) {
    if (this._productPageState().filtredProducts === undefined){
      // no filter
      const startEndIndexes = this.calculateStartAndIndexes(this._productPageState().allProducts.length,currentPage);
      this._productPageState.set(
        {
          ...this._productPageState(),
          currentPage : currentPage,
          paginatedProducts : this._productPageState().allProducts.slice(startEndIndexes[0],startEndIndexes[1]),
        }
      )
    }else{
      // filter
      const startEndIndexes = this.calculateStartAndIndexes(this._productPageState().filtredProducts!.length,currentPage);
      this._productPageState.set(
        {
          ...this._productPageState(),
          currentPage : currentPage,
          paginatedProducts : this._productPageState().filtredProducts!.slice(startEndIndexes[0],startEndIndexes[1]),
        }
      )
    }
  }


  setFilterShown(state : boolean){
    this._productPageState.set(
      {...this._productPageState(),isFilterOveryalyShown:state}
    )
  }

  private getFiltredProducts(){

     const oldProducts = this._productPageState().allProducts
     const currentFilterCategories = this._productPageState().appliedFilter.categories.map(category => category.name)

     const validProducts = oldProducts.filter((product)=>{
        let productCategoryValid = true
        if (currentFilterCategories.length > 0){
           productCategoryValid = currentFilterCategories.includes(product.category)
        }
        // add rest filter

        return productCategoryValid
     })



     const startEndIndexes = this.calculateStartAndIndexes(validProducts.length,1);

     
     this._productPageState.set({
       ...this._productPageState(),
       filtredProducts : validProducts,
        paginatedProducts : validProducts.slice(startEndIndexes[0],startEndIndexes[1]),
        currentPage : 1,
        totalPages : Math.ceil(validProducts.length/this.PAGINATION_SIZE)})
    
  }

  addACategoryToCurrentFilter(category :  Category){
    const oldFilterCateogries = this._productPageState().appliedFilter.categories
    oldFilterCateogries.push(category)
    this._productPageState.set(
      {...this._productPageState(),
        appliedFilter:{...this._productPageState().appliedFilter,
          categories : oldFilterCateogries
        }
      }
    )

    this.getFiltredProducts()
  }


  removeCategoryFromCurrentFilter(category : Category){
    const oldFilterCateogries = this._productPageState().appliedFilter.categories
    const newFilterCategories = Array<Category>()
    for (let cat of oldFilterCateogries){
        if (cat.name !== category.name){
          newFilterCategories.push(cat)
        }
    }

    this._productPageState.set(
      {...this._productPageState(),
        appliedFilter:{...this._productPageState().appliedFilter,
          categories : newFilterCategories
        }
      }
    )

    this.getFiltredProducts()
  }



}
