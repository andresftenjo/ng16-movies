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
    onSort(term: string) {
      //TODO: Add asc/desc sort param, and format dates for sorting
      //TODO: Prevent mutable this.movies or call Signal Movies[] service with sorting
      this.movies = term === 'releasedDate' ? 
        this.movies?.sort((x:any, y:any) => (y[term] > x[term]) ? 1 : -1)
        : 
        this.movies?.sort((x:any, y:any) => (x[term] > y[term]) ? 1 : -1);
    }
}
