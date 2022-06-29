import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  private API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
  private SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

  constructor() { }

  async getMovies(isSearch = false, searchValue: string) {
    console.log(isSearch);
    const response = await fetch(isSearch ? this.SEARCH_API + searchValue : this.API_URL);
    return response.json();
  }
}
