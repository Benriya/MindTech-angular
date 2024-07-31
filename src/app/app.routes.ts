import { Routes } from '@angular/router';
import {PokemonFrontPageComponent} from "./components/pokemon-front-page/pokemon-front-page.component";
import {PokemonDetailsPageComponent} from "./components/pokemon-details-page/pokemon-details-page.component";

export const routes: Routes = [
  { path: 'pokemon-front', component: PokemonFrontPageComponent },
  { path: 'pokemon-details', component: PokemonDetailsPageComponent },
  { path: '', component: PokemonFrontPageComponent },
  { path: '**', component: PokemonFrontPageComponent }
];
