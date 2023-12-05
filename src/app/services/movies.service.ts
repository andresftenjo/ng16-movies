import { Injectable, Signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { Movie } from '../models/movie';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient);
  moviesData = '/assets/data/movies.json';
  public movies = toSignal<Movie[]>(this.http.get<Movie[]>(this.moviesData)
  .pipe(catchError(error => {
    console.error(error);
    const nullMovies:Movie[] = [];
    return of(nullMovies);
  })));
  constructor() { }
}
