import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-moviesgrid',
  templateUrl: './moviesgrid.component.html',
  styleUrls: ['./moviesgrid.component.scss']
})
export class MoviesgridComponent {

    @Input()
    movies: Movie[] | undefined = [];
    
    selectMovie() {

    }
}
