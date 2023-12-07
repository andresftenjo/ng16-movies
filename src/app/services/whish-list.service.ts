import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private wishListKey = 'moviesWishList';

  localStorageService = inject(LocalStorageService);

  constructor() { }

  addMovie(movie: Movie): void {
    let wishList = this.getWishList();
    const movieExists = wishList.some((m:Movie) => m.id === movie.id);
    if (!movieExists) {
      wishList.push(movie);
      this.localStorageService.save(this.wishListKey, wishList);
    }
  }
  
  getWishList(): Movie[] {
    return this.localStorageService.read(this.wishListKey) || [];
  }

  removeMovie(movieId: number): void {
    let wishList = this.getWishList();
    if (wishList) {
      wishList = wishList.filter(movie => movie.id !== movieId);
      this.localStorageService.save(this.wishListKey, wishList);
    }
  }

  isMovieInWishList(movieId: number): boolean {
    const wishList = this.getWishList();
    return wishList.some(movie => movie.id === movieId);
  }
}
