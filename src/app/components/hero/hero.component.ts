import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input()
  backgroundImage: string = '';

  @Input()
  title: string = '';

  @Input()
  description: string = '';
}
