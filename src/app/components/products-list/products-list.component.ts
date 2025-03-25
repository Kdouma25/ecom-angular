import { Component, inject, Inject, signal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { FilterOverlayComponent } from "../filter-overlay/filter-overlay.component";
import { ProductPagination } from '../../models/products-pagination';

const PAGINATION_SIZE = 5;

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, NavbarComponent, ProductCardComponent, PaginationComponent, FilterOverlayComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    private productService = inject(ProductsService)
    //productsSignal = signal<Product[]>([]);
    productPagination!  : ProductPagination
    
    

    

    ngOnInit() {
      this.productService.fetchProducts().subscribe({
        next : (products) =>{
            
            let startEndIndexes = this.calculateStartAndIndexes(products.length,1)
            console.log(startEndIndexes);
        
            this.productPagination = {
              allProducts : products,
              paginationSize : PAGINATION_SIZE,
              currentPage : 1,
              productsInPage : products.slice(startEndIndexes[0],startEndIndexes[1]),
              totalPages : Math.ceil(products.length/PAGINATION_SIZE)
            }

            console.log(this.productPagination)
            console.log(this.productPagination.totalPages)
      
        },
        error : (err)=>{
          console.log("an error accured ",err)
        }
      });
    }


    calculateStartAndIndexes(productsSize : number, currentPage : number){
        const startIndex = Math.min(PAGINATION_SIZE *(currentPage-1), productsSize) 
        const endIndex = Math.min(startIndex+PAGINATION_SIZE,productsSize)
        return [startIndex,endIndex]
    }


}
