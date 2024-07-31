import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFrontPageComponent } from './pokemon-front-page.component';

describe('PokemonFrontPageComponent', () => {
  let component: PokemonFrontPageComponent;
  let fixture: ComponentFixture<PokemonFrontPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFrontPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
