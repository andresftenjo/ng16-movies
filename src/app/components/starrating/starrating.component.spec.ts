import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './starrating.component';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarRatingComponent]
    });
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
