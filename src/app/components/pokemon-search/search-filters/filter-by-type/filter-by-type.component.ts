import { Component, EventEmitter, Output } from '@angular/core';
import { types } from '../../../../resources/constants';
import { MatSelectModule } from '@angular/material/select';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-filter-by-type',
  standalone: true,
  imports: [MatSelectModule, NgForOf],
  templateUrl: './filter-by-type.component.html',
  styleUrl: './filter-by-type.component.css',
})
export class FilterByTypeComponent {
  @Output() typeChanged = new EventEmitter<string>();
  TYPES = types;

  changeType($event: string): void {
    this.typeChanged.emit($event);
  }
}
