import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductPageState } from '../../models/states/productPageState';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})

export class PaginationComponent {
  
  constructor(public productService:ProductsService){
    
  }




onButtonClick(numberOnButton : number){
     if (this.productService.productPageState().currentPage != numberOnButton){
       console.log("should switch to page ",numberOnButton);
       this.productService.setCurrentPage(numberOnButton);  
     }
   } 


  onNextClicked(){
    if (this.productService.productPageState().currentPage+1<=this.productService.productPageState().totalPages){
      this.onButtonClick(this.productService.productPageState().currentPage+1)
    }
  }
  onPreviousClicked(){
    if (this.productService.productPageState().currentPage>1){
      this.onButtonClick(this.productService.productPageState().currentPage-1)
    }
  }


  get paginationArray() {
    return Array.from({length: this.productService.productPageState().totalPages}, (_, i) => i + 1);
  }
}
