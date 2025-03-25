import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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


  ngOnInit(){
    this.numbers = Array.from({ length: this.maxPages }, (_, i) => 1 + i);
    console.log(this.numbers)
  }
}
