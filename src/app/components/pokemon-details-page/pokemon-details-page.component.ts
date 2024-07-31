import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-api/pokemon.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GenericAPIModel } from '../../models/genericAPIModel';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PokemonModel } from '../../models/pokemon-model';
import { SpinnerComponent } from '../../resources/spinner/spinner.component';
import { debounceTime } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-details-page',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage, SpinnerComponent, NgIf],
  templateUrl: './pokemon-details-page.component.html',
  styleUrl: './pokemon-details-page.component.css',
})
export class PokemonDetailsPageComponent implements OnInit {
  pokemon: any;
  status: boolean = false;
  statusText = '';
  buttonText = '';

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.status = this.route.snapshot.paramMap.get('status') === 'true';
    this.pokemonService
      .getPokemonByName(<string>this.route.snapshot.paramMap.get('pokemon'))
      .pipe(untilDestroyed(this), debounceTime(2000))
      .subscribe((pokemon) => (this.pokemon = pokemon));
    this.statusText = this.pokemonService.getStatusText(this.status);
    this.buttonText = this.pokemonService.getButtonCatchText(this.status);
  }

  //refreshing before clicking Catch or Release will delete LocalStorage, don't know why yet
  pokemonAction(event: MouseEvent, pokemon: PokemonModel): void {
    event.stopPropagation();
    pokemon.caught = this.status;
    this.pokemonService.catchPokemon(pokemon);
    this.navigateToFrontPage();
  }

  getAbilities(): string[] {
    return this.pokemon.abilities.map(
      (abilityDetails: {
        ability: GenericAPIModel;
        is_hidden: boolean;
        slot: number;
      }) => {
        return abilityDetails.is_hidden ? '' : abilityDetails.ability.name;
      },
    );
  }

  navigateToFrontPage(): void {
    this.router.navigate(['/pokemon-front/']);
  }
}
