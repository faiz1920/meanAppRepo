import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class GenreService {

  constructor(private http: Http) { }

  // Get Genres
  getGenres() {
    return this.http.get('http://localhost:3000/api/genres')
      .map(res => res.json());
  }

  // Add Genre
  addGenre(newGenre) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/genre', newGenre, { headers: headers })
      .map(res => res.json());
  }

  // Delete Genre
  deleteGenre(id) {
    return this.http.delete(`http://localhost:3000/api/genre/${id}`)
      .map(res => res.json());
  }


}
