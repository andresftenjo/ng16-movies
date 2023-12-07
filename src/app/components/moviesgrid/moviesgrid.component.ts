import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { WishListService } from 'src/app/services/whish-list.service';

@Component({
  selector: 'app-moviesgrid',
  templateUrl: './moviesgrid.component.html',
  styleUrls: ['./moviesgrid.component.scss']
})
export class MoviesgridComponent {

    @Input()
    movies: Movie[] | undefined = [];
    
    whishListService = inject(WishListService);
    router = inject(Router);
    
    selectMovie(movieId: number) {
      this.router.navigate(['/movie/' + movieId]);
    }

    addToWishList(movie: Movie) {
      this.whishListService.addMovie(movie);
    }
    removeFromWishList(movieId: number) {
      this.whishListService.removeMovie(movieId);
    }

    onSort(term: string) {
      //TODO: Add asc/desc sort param, and format dates for sorting
      //TODO: Prevent mutable this.movies or call Signal Movies[] service with sorting
      this.movies = term === 'releasedDate' ? 
        this.movies?.sort((x:any, y:any) => (y[term] > x[term]) ? 1 : -1)
        : 
        this.movies?.sort((x:any, y:any) => (x[term] > y[term]) ? 1 : -1);
    }
    isWishListed(movieId: number): boolean {
      return this.whishListService.isMovieInWishList(movieId);
    }
}
