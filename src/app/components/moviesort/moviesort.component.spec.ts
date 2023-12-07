import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesortComponent } from './moviesort.component';

describe('MoviesortComponent', () => {
  let component: MoviesortComponent;
  let fixture: ComponentFixture<MoviesortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesortComponent]
    });
    fixture = TestBed.createComponent(MoviesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
