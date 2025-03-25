import { Component } from '@angular/core';
import { LucideAngularModule, SlidersHorizontal} from 'lucide-angular';

@Component({
  selector: 'app-filter-overlay',
  imports: [LucideAngularModule],
  templateUrl: './filter-overlay.component.html',
  styleUrl: './filter-overlay.component.css'
})
export class FilterOverlayComponent {
  filterIcon = SlidersHorizontal

}
