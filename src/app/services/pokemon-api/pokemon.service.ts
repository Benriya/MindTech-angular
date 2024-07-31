import { Injectable } from '@angular/core';
import { apiUrl } from "../../resources/constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {PokemonApiModel} from "../../models/pokemon-api-model";
import {PokemonModel} from "../../models/pokemon-model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API_URL = apiUrl;
  constructor(private httpClient: HttpClient) { }

  getPokemons(count = 10): Observable<PokemonApiModel> {
    return this.httpClient.get<PokemonApiModel>(this.API_URL + `pokemon?limit=${count}`);
  }

  getPokemonsByType(type: string): Observable<PokemonApiModel> {
    return this.httpClient.get<PokemonApiModel>(this.API_URL + `type/${type}/`);
  }

  getPokemonByUrl(url: string): Observable<PokemonModel> {
    return this.httpClient.get<PokemonModel>(url);
  }

  getPokemonByName(name: string): Observable<PokemonModel> {
    return this.httpClient.get<PokemonModel>(this.API_URL + `pokemon/${name}`);
  }
}
