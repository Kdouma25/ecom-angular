import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, signal } from '@angular/core';
import { Observable} from 'rxjs';
import { ProductPageState } from '../models/states/productPageState';
import { Product } from '../models/product';


const API_URL = "http://localhost:3000/products";


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  PAGINATION_SIZE = 5;

  private _productPageState = signal<ProductPageState>({
    allProducts: Array<Product>(),
    paginatedProducts: Array<Product>(),
    paginationSize: this.PAGINATION_SIZE,
    currentPage: 1,
    totalPages: 1
  })

  
  readonly productPageState = this._productPageState



  constructor(private http: HttpClient) {

  }

  init(): void {
    this.http.get<Product[]>(API_URL).subscribe({
      next: (products) => {
        console.log("products dound" , products)
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

    console.log(this._productPageState());
    console.log("above update");
  }



  calculateStartAndIndexes(productsSize: number, currentPage: number) {
    const startIndex = Math.min(this.PAGINATION_SIZE * (currentPage - 1), productsSize)
    const endIndex = Math.min(startIndex + this.PAGINATION_SIZE, productsSize)
    return [startIndex, endIndex]
  }



  setCurrentPage(currentPage : number) {
    const startEndIndexes = this.calculateStartAndIndexes(this._productPageState().allProducts.length,currentPage);
    this._productPageState.set(
      {
        ...this._productPageState(),
        currentPage : currentPage,
        paginatedProducts : this._productPageState().allProducts.slice(startEndIndexes[0],startEndIndexes[1]),
      }
    )
  }


}
