import { Component, EventEmitter, Output } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-moviesort',
  templateUrl: './moviesort.component.html',
  styleUrls: ['./moviesort.component.scss']
})
export class MoviesortComponent {

  @Output()
  sortEmitter = new EventEmitter<string>(); 

  emitSort(element: any, term: string){
    $('.app-moviesort .dropdown-item').removeClass('active');
    $(element.currentTarget).addClass('active');
    this.sortEmitter.emit(term);
  }
}
