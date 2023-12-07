import { Injectable, Signal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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
  
  public getMoviedd(movieId: number): Signal<Movie[] | undefined>{
    return toSignal<Movie[]>(this.http.get<Movie[]>(this.moviesData).pipe(
      map((array: any) => array.find((item:any) => item.id === movieId))
    ));
  }

  public getMovie(param: number): Movie | undefined {
    return this.movies()?.find(x => x.id == param);
  }
}
