import { Component } from '@angular/core';
import { LucideAngularModule, SlidersHorizontal , X} from 'lucide-angular';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';
import {FormsModule} from  '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter-overlay',
  imports: [LucideAngularModule,CommonModule,FormsModule],
  templateUrl: './filter-overlay.component.html',
  styleUrl: './filter-overlay.component.css'
})
export class FilterOverlayComponent {
  filterIcon = SlidersHorizontal
  xIcon = X
  minRatingInput = '';

  constructor (public productSerivce : ProductsService,public categoriesService  : CategoriesService){
    
  }


  onCloseFilter(){
    this.productSerivce.setFilterShown(false);
  }

  onOpenFilter(){
    this.productSerivce.setFilterShown(true)
  }

  private addCategoryToFilter(category: Category){
    this.productSerivce.addACategoryToCurrentFilter(category)
  }
  private removeCategoryFromFilter(category : Category){
    this.productSerivce.removeCategoryFromCurrentFilter(category)
  }

  onCategoryClicked(category : Category){
    if (!this.productSerivce.productPageState().appliedFilter.categories.includes(category)){
      this.addCategoryToFilter(category)
    }else{
      this.removeCategoryFromFilter(category)
    }
  }


  omMinRatingChanged(event : Event){
    console.log(this.minRatingInput,"hh");
  }

 

}
