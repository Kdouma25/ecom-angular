import { Component, inject, Inject, Input, signal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { FilterOverlayComponent } from "../filter-overlay/filter-overlay.component";
import { RouterOutlet } from '@angular/router';
import { ProductPageState } from '../../models/states/productPageState';




@Component({
  selector: 'app-products-list',
  imports: [CommonModule, NavbarComponent, ProductCardComponent, PaginationComponent, FilterOverlayComponent, RouterOutlet],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  constructor(public productService: ProductsService) {
  }




  /*  const currentProductPageStatus  = this._productPageState
        const startEndIndexes = this.calculateStartAndIndexes(currentProductPageStatus().allProducts.length,currentProductPageStatus().currentPage)
        const paginatedProducts = currentProductPageStatus().allProducts.slice(startEndIndexes[0],startEndIndexes[1])
        
        currentProductPageStatus.set({...currentProductPageStatus(),
          paginatedProducts:paginatedProducts,
          totalPages : Math.ceil(currentProductPageStatus().allProducts.length/currentProductPageStatus().paginationSize)})
        
          productPageState.set(currentProductPageStatus) */


  ngOnInit() : void{
    console.log("product page init deetected . .. .")
    this.productService.init()
  }



/*   calculateStartAndIndexes(productsSize: number, currentPage: number) {
    const startIndex = Math.min(this.productService.PAGINATION_SIZE * (currentPage - 1), productsSize)
    const endIndex = Math.min(startIndex + this.productService.PAGINATION_SIZE, productsSize)
    return [startIndex, endIndex]
  } */






}
