import {Component, OnInit} from '@angular/core';
import {PokemonListComponent} from "../pokemon-list/pokemon-list.component";
import {PokemonService} from "../../services/pokemon-api/pokemon.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {switchMap, forkJoin, Observable} from "rxjs";
import {PokemonApiModel} from "../../models/pokemon-api-model";
import {PokemonSearchComponent} from "../pokemon-search/pokemon-search.component";
import {GenericAPIModel} from "../../models/genericAPIModel";
import {PokemonModel} from "../../models/pokemon-model";
import {AsyncPipe} from "@angular/common";

@UntilDestroy()
@Component({
  selector: 'app-pokemon-front-page',
  standalone: true,
  imports: [
    PokemonListComponent,
    PokemonSearchComponent,
    AsyncPipe
  ],
  templateUrl: './pokemon-front-page.component.html',
  styleUrl: './pokemon-front-page.component.css'
})
export class PokemonFrontPageComponent implements OnInit{
  pokemons$: Observable<PokemonModel[]>;
  existingPokemonLength = 0;
  constructor(
    private readonly pokemonService: PokemonService
  ) {
    this.pokemons$ = this.pokemonService.pokemons$;
  }

  ngOnInit(): void {

    //should be inside the other pipe, couldn't figure out
    this.pokemons$.subscribe(pokemons => this.existingPokemonLength = pokemons.length);

    if(!this.existingPokemonLength) {
      this.pokemonService.getPokemons().pipe(
        untilDestroyed(this),
        switchMap((pokemons: PokemonApiModel) => {
            const observables = pokemons.results.map((pokemon: GenericAPIModel) =>
              this.pokemonService.getPokemonByUrl(pokemon.url)
            );
            return forkJoin(observables);
          }
        )
      ).subscribe((pokemons: PokemonModel[]) => {
        pokemons.map((pokemon: PokemonModel) => pokemon.caught = false);
        console.log(pokemons);
        this.pokemonService.setUpPokemons(pokemons);
      });
    }
  }

  showCaught(event: boolean): void {
    event ?
      this.pokemons$ = this.pokemonService.getPokemonsByCaught() :
      this.pokemons$ = this.pokemonService.pokemons$;
  }

  filterPokemonNames(search: string): void {
    !!search ?
      this.pokemons$ = this.pokemonService.getPokemonsByNameFilter(search) :
      this.pokemons$ = this.pokemonService.pokemons$;
  }

  filterPokemonTypes(type: string): void {
    !!type ?
      this.pokemons$ = this.pokemonService.getPokemonsByTypeFilter(type) :
      this.pokemons$ = this.pokemonService.pokemons$;
  }
}
