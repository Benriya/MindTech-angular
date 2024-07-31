import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCaughtComponent } from './filter-by-caught.component';

describe('FilterByCaughtComponent', () => {
  let component: FilterByCaughtComponent;
  let fixture: ComponentFixture<FilterByCaughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByCaughtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterByCaughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
