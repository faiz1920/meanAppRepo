import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
  providers: [GenreService]
})
export class GenresComponent implements OnInit {
  genre: any = {};
  genres: Genre[];
  name: String;
  create_date: String;

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres()
      .subscribe(genres => this.genres = genres);
  }

  // Add Genre
  addGenre() {
    alert(JSON.stringify(this.genre))
    this.genreService.addGenre(this.genre)
      .subscribe(genre => console.log(`Added Genre ${JSON.stringify(genre)}`))
  }

  // Delete Genre
  deleteGenre(id) {
    let self = this;
    this.genreService.deleteGenre(id)
      .subscribe(genre => {
        if (genre.n == 1) {
          console.log(`Deleted Genre ${JSON.stringify(genre)}`)
          for (let i = 0; i < self.genres.length; i++) {
            if (self.genres[i]._id == id)
              self.genres.splice(i, 1);
          }
        }
      })
  }
}
