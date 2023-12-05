import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { Movie } from '../models/movie';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController: HttpTestingController;
  let mockMovies: Movie[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });

    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);

    mockMovies = [
      {
        "id": 1,
        "title": "Tenet",
        "description": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "rating": 7.8,
        "duration": "2h 30min",
        "genre": "Action, Sci-Fi",
        "releasedDate": "3 September 2020",
        "trailerLink": "https://www.youtube.com/watch?v=LdOM0x0XDMo",
        "image": "Tenet.png"
      },
      {
        "id": 2,
        "title": "Spider-Man: Into the Spider-Verse",
        "description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        "rating": 8.4,
        "duration": "1h 57min",
        "genre": "Action, Animation, Adventure",
        "releasedDate": "14 December 2018",
        "trailerLink": "https://www.youtube.com/watch?v=tg52up16eq0",
        "image": "Spider Man.png"
      }
    ];
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve movies on successful HTTP request', () => {
    let movies_ = service.movies();
      expect(movies_?.length).toBe(2);
      expect(movies_).toEqual(mockMovies);
    });
});
