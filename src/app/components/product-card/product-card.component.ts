import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { LucideAngularModule, Star , ShoppingCart} from 'lucide-angular';


@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product! : Product

  readonly star = Star;
  readonly shoppingCart = ShoppingCart;
}
