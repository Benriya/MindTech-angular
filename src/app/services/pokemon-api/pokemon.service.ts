import { Injectable } from '@angular/core';
import { apiUrl } from "../../resources/constants";
import {BehaviorSubject, Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {PokemonApiModel} from "../../models/pokemon-api-model";
import {PokemonModel} from "../../models/pokemon-model";
import {GenericAPIModel} from "../../models/genericAPIModel";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons = new BehaviorSubject(<PokemonModel[]>[]);
  pokemons$ = this.pokemons.asObservable();

  setUpPokemons(pokemons: PokemonModel[]): void {
    console.log(pokemons);
    this.pokemons.next(pokemons);
  }

  catchPokemon(pokemonAction: PokemonModel): void {
    const pokemons = this.pokemons.getValue().map((pokemon: PokemonModel) => {
      console.log(pokemonAction.caught);
      if(pokemon.name === pokemonAction.name) {
        pokemon.caught = !pokemonAction.caught
      }
      return pokemon;
    });
    this.pokemons.next([...pokemons])
  }

  API_URL = apiUrl;
  constructor(private httpClient: HttpClient) { }

  getPokemons(count = 10): Observable<PokemonApiModel> {
    return this.httpClient.get<PokemonApiModel>(this.API_URL + `pokemon?limit=${count}`);
  }

  getPokemonByUrl(url: string): Observable<PokemonModel> {
    return this.httpClient.get<PokemonModel>(url);
  }

  getPokemonByName(name: string): Observable<PokemonModel> {
    return this.httpClient.get<PokemonModel>(this.API_URL + `pokemon/${name}`);
  }

  getPokemonsByCaught(): Observable<PokemonModel[]> {
    return of(this.pokemons.getValue().filter(pokemon => pokemon.caught));
  }

  getPokemonsByNameFilter(search: string): Observable<PokemonModel[]> {
    return of(this.pokemons.getValue().filter(pokemon => pokemon.name.includes(search)));
  }

  getPokemonsByTypeFilter(type: string): Observable<PokemonModel[]> {
    return of(this.pokemons.getValue().filter(pokemon => this.getTypes(pokemon).includes(type)));
  }

  getTypes(pokemon: PokemonModel): string[] {
    return pokemon.types.map((type: {slot: number, type: GenericAPIModel} ) => type.type.name);
  }
}
