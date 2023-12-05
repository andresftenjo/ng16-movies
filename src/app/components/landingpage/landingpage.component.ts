import { Component, inject } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  landingHeroImage = './assets/img/reels-film.jpeg';
  movieService = inject(MoviesService);

  ngOnInit() {}
}
