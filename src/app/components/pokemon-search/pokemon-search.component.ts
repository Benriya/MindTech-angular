import {Component, EventEmitter, Output} from '@angular/core';
import {FilterByCaughtComponent} from "./search-filters/filter-by-caught/filter-by-caught.component";
import {FilterByNameComponent} from "./search-filters/filter-by-name/filter-by-name.component";
import {FilterByTypeComponent} from "./search-filters/filter-by-type/filter-by-type.component";

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [
    FilterByCaughtComponent,
    FilterByNameComponent,
    FilterByTypeComponent
  ],
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.css'
})
export class PokemonSearchComponent {
  @Output() showCaught = new EventEmitter<boolean>();
  @Output() searchPokemons = new EventEmitter<string>();
  @Output() typeChanged = new EventEmitter<string>();
}
