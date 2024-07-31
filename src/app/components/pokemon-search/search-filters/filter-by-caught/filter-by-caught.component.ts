import {Component, EventEmitter, Output} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-filter-by-caught',
  standalone: true,
    imports: [
        MatCheckboxModule
    ],
  templateUrl: './filter-by-caught.component.html',
  styleUrl: './filter-by-caught.component.css'
})
export class FilterByCaughtComponent {
  @Output() showCaught = new EventEmitter<boolean>();

  isChecked(event: boolean): void {
    this.showCaught.emit(event);
  }
}
