import {ApplicationRef, Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "./services/shared.service";
import {HttpServiceService} from "./services/http-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'films-listing';
  searchSubscriptionObject: any = null;

  movies: any;

  constructor(
    public shared: SharedService,
    private http: HttpServiceService,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {
    const component = this;
    this.searchSubscriptionObject = this.shared.searchFieldChanged.subscribe(value => {
      component.getMoviesList((value !== '') && typeof value !== 'undefined' && value !== null, value);
    });
  }

  getMoviesList(isSearch = false, searchValue: any) {
    this.http.getMovies(isSearch, searchValue).then(
      data => {
        this.movies = (data.hasOwnProperty('results')) ? data.results : [];
        this.appRef.tick();
      }
    )
  }

  ngOnDestroy() {
    if (this.searchSubscriptionObject) this.searchSubscriptionObject.unsubscribe();
  }
}
