import { Component, Input, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from "./components/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pageNumber = signal(1);
  
  title = 'ecom-angular';

  ngOnInit(): void {
    // Access the state passed in the history
    console.log("app is initailed")
  }

  ngOnChanges() : void {
    console.log("the app state has changed !!!")
  }
}
