import { Component, inject, Inject, Input, signal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { FilterOverlayComponent } from "../filter-overlay/filter-overlay.component";
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-products-list',
  imports: [CommonModule, NavbarComponent, ProductCardComponent, PaginationComponent, FilterOverlayComponent, RouterOutlet],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  constructor(public productService: ProductsService) {
  }




  ngOnInit() : void{
    this.productService.init()
  }







}
