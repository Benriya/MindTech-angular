import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon-api/pokemon.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {GenericAPIModel} from "../../models/genericAPIModel";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-pokemon-details-page',
  standalone: true,
  imports: [
    MatButtonModule,
    NgOptimizedImage
  ],
  templateUrl: './pokemon-details-page.component.html',
  styleUrl: './pokemon-details-page.component.css'
})
export class PokemonDetailsPageComponent implements OnInit {
  pokemon: any;

  constructor(private readonly pokemonService: PokemonService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonByName(<string>this.route.snapshot.paramMap.get('pokemon'))
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  getAbilities(): string[] {
    return this.pokemon.abilities.map((abilityDetails: {ability: GenericAPIModel, is_hidden: boolean, slot: number}) => abilityDetails.ability.name);
  }

}
