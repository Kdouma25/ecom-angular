import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductPageState } from '../../models/states/productPageState';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() maxPages! : number
  @Input() currentPage! : number

   numbers = Array()

   constructor(public productService:ProductsService){
    this.productPageState =  productService.productPageState()
  }

   productPageState! : ProductPageState

  ngOnInit(){
    this.numbers = Array.from({ length: this.maxPages }, (_, i) => 1 + i);
    console.log(this.numbers)
  }


onButtonClick(numberOnButton : number){
     if (this.currentPage != numberOnButton){
       console.log("should switch to page ",numberOnButton);
       this.productService.setCurrentPage(numberOnButton);
       
     }
   } 


  onNextClicked(){
    if (this.currentPage+1<=this.maxPages){
      this.onButtonClick(this.currentPage+1)
    }
  }
  onPreviousClicked(){
    if (this.currentPage>1){
      this.onButtonClick(this.currentPage-1)
    }
  }
}
