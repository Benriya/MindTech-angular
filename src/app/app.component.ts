import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PokemonFrontPageComponent } from './components/pokemon-front-page/pokemon-front-page.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    PokemonFrontPageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mindtech';
}
