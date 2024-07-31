import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filter-by-name',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './filter-by-name.component.html',
  styleUrl: './filter-by-name.component.css',
})
export class FilterByNameComponent {
  @Output() searchPokemons = new EventEmitter<string>();

  filterPokemons(event: KeyboardEvent): void {
    const searchInput = (event.target as HTMLInputElement).value;
    this.searchPokemons.emit(searchInput);
  }
}
