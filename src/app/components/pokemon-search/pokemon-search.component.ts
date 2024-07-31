import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {Subject} from "rxjs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.css'
})
export class PokemonSearchComponent {
  private readonly searchInput$ = new Subject<string>();
 /* private readonly filterCourses$ = this.searchInput$.pipe(
    untilDestroyed(this),
    tap(() => this.loading = true),
    debounceTime(2000),
    distinctUntilChanged(),
    filter(text => text.length > 3 || text.length === 0),
    switchMap(text => this.searchForCourses(text))
  );*/

  filterPokemons(event: KeyboardEvent): void {
    const searchInput = (event.target as HTMLInputElement).value;
    this.searchInput$.next(searchInput);
    //this.filterCourses$.subscribe();
  }


}
