import {Component, OnInit} from '@angular/core';
import {PokemonListComponent} from "../pokemon-list/pokemon-list.component";
import {PokemonService} from "../../services/pokemon-api/pokemon.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {switchMap, forkJoin} from "rxjs";
import {PokemonApiModel} from "../../models/pokemon-api-model";
import {PokemonSearchComponent} from "../pokemon-search/pokemon-search.component";
import {GenericAPIModel} from "../../models/genericAPIModel";

@UntilDestroy()
@Component({
  selector: 'app-pokemon-front-page',
  standalone: true,
  imports: [
    PokemonListComponent,
    PokemonSearchComponent
  ],
  templateUrl: './pokemon-front-page.component.html',
  styleUrl: './pokemon-front-page.component.css'
})
export class PokemonFrontPageComponent implements OnInit{
  pokemons: any = [];
  constructor(
    private readonly pokemonService: PokemonService,
    /*private readonly store: Store,
    private readonly actions: Actions*/
  ) {}

  ngOnInit(): void {
    //this.store.dispatch(new CourseListAction());
    this.pokemonService.getPokemons().pipe(
      untilDestroyed(this),
      switchMap((pokemons: PokemonApiModel) => {
          const observables = pokemons.results.map((pokemon: GenericAPIModel) =>
            this.pokemonService.getPokemonByUrl(pokemon.url)
          );
          return forkJoin(observables);
        }
      )
    ).subscribe(pokemons => {
      pokemons.map(pokemon => pokemon.caught = false);
      this.pokemons = pokemons;
      console.log(pokemons);
    });
  }

  /*getPokemons(searchInput: string): Observable<PokemonApiModel[]> {
    return this.pokemonService.getPokemons().pipe(
      untilDestroyed(this),
      tap(pokemons => {
          //this.loading = false;
          this.pokemons = [...pokemons];
        }
      )
    )
  }*/
}
