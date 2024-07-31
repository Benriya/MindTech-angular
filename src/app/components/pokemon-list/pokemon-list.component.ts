import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PokemonService } from '../../services/pokemon-api/pokemon.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GenericAPIModel } from '../../models/genericAPIModel';
import { PokemonModel } from '../../models/pokemon-model';
import { SpinnerComponent } from '../../resources/spinner/spinner.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, SpinnerComponent, NgIf, NgClass],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() pokemons: PokemonModel[] = [];
  displayedColumns: string[] = ['name', 'types', 'status', 'button'];

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly router: Router,
  ) {}

  getTypes(pokemon: PokemonModel): string[] {
    return this.pokemonService.getTypes(pokemon);
  }

  isCaught(caught: boolean): string {
    return this.pokemonService.getStatusText(caught);
  }

  pokemonAction(event: MouseEvent, pokemon: PokemonModel): void {
    event.stopPropagation();
    this.pokemonService.catchPokemon(pokemon);
  }

  openPokemonDetails(pokemonName: string, caught: boolean): void {
    this.router.navigate([
      '/pokemon-details/',
      { pokemon: pokemonName, status: caught },
    ]);
  }
}
