import { Component, input, Input, output } from '@angular/core';
import { NavBarTabs } from '../../models/navbar-tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input()  currentTab : NavBarTabs = "products";

}
