import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesgridComponent } from './moviesgrid.component';

describe('MoviesgridComponent', () => {
  let component: MoviesgridComponent;
  let fixture: ComponentFixture<MoviesgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesgridComponent]
    });
    fixture = TestBed.createComponent(MoviesgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
