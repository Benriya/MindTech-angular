import {Component, Input} from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import {PokemonService} from "../../services/pokemon-api/pokemon.service";
import {Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {GenericAPIModel} from "../../models/genericAPIModel";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemons: any[] = [];
  displayedColumns: string[] = ['name', 'types', 'status', 'button'];

  constructor(private readonly courseService: PokemonService, private readonly router: Router) {}

  getTypes(pokemon: any): string[] {
    return pokemon.types.map((type: {slot: number, type: GenericAPIModel} ) => type.type.name);
  }

  isCaught(caught: boolean): string {
    return caught ? 'Caught' : '-';
  }

  pokemonAction(event: MouseEvent, pokemon: any): void {
    event.stopPropagation();
    pokemon.caught = !pokemon.caught;
  }

  openPokemonDetails(pokemon: any): void {
    console.log(pokemon);

    this.router.navigate(['/pokemon-details/', { pokemon: pokemon.name }]);
  }

  /*courseId(index: number, course: Course) {
    return course.id;
  }

  deleteCourse(courseId: number) {
    if (this.askForDeletion()) {
      this.courseService.removeItem(courseId).pipe(untilDestroyed(this)).subscribe();
    }
  }

  askForDeletion(): boolean {
    return confirm('Do you really want to delete the selected entries?');
  }

  navigateToEditCourse(id: number): void {
    this.router.navigate([`/courses/${id}`]);
  }*/
}
