import { Component, OnInit, Signal, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WishListService } from 'src/app/services/whish-list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movieService = inject(MoviesService);
  public movie: Movie | undefined;
  public param = 0;
  private activatedRoute = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private whishListService = inject(WishListService);

  private movieIdParam = this.activatedRoute.snapshot.params['uid']
  constructor() {
    effect(() => {
     this.movie = this.movieService.getMovie(this.movieIdParam);
    });
  }
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  isWishListed(movieId: number = 0): boolean {
    return this.whishListService.isMovieInWishList(movieId);
  }
  addToWishList(movie: Movie | undefined) {
    if(movie)
      this.whishListService.addMovie(movie);
  }
  removeFromWishList(movieId: number = 0) {
    this.whishListService.removeMovie(movieId);
  }
}
