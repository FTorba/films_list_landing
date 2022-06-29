import {Component, Input} from '@angular/core';
import {HttpServiceService} from "../../services/http-service.service";

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.less']
})
export class FilmCardComponent {

  @Input() movie: any;

  constructor(public http: HttpServiceService) {}

  ngOnInit(): void {
  }

  getMovieRatingColor(movieObject: any): string {
    let color = '';
    if (movieObject && movieObject.hasOwnProperty('vote_average')) {
      color = movieObject['vote_average'] >= 8 ? 'green' : (movieObject['vote_average'] >= 5 ? 'orange' : 'red');
    }
    return color;
  }

}
