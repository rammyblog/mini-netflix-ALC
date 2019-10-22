import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../movie-data';
import { Movie } from '../movie'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor( private movieService: MovieService) { }

  movies: Movie[];
  defaultImageUrl = "https://dummyimage.com/337x500/f9f9f9/000000.png&text=No+Image"

  selectedMovie: Movie;
  page = 1;
  pageSize = 6;


  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void {
  this.selectedMovie = movie;
}
}
