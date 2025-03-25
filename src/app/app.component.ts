import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom-angular';
}
