import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.scss']
})
export class StarRatingComponent {
  @Input() ratings: number = 0;
  starsArray: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ratings']) {
      this.updateStars();
    }
  }

  updateStars(): void {
    this.starsArray = [];
    let rating = this.ratings / 2;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        this.starsArray.push(1); // Full star
      } else if (i > rating && i - 1 < rating) {
        this.starsArray.push(rating - (i - 1)); // Half star
      } else {
        this.starsArray.push(0); // Empty star
      }
    }
  }
}
