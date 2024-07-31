import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByNameComponent } from './filter-by-name.component';

describe('FilterByNameComponent', () => {
  let component: FilterByNameComponent;
  let fixture: ComponentFixture<FilterByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
