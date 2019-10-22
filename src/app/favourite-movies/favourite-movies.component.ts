import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {
  constructor( private movieService: MovieService,
      private localStorageService: LocalStorageService) { }

  movies: Movie[];
  favMovies: Movie[]
  defaultImageUrl = "https://dummyimage.com/337x500/f9f9f9/000000.png&text=No+Image"

  selectedMovie: Movie;

  ngOnInit() {
    this.getMovies();

  }

  getMovies(): void{
    const currentFavArray = this.localStorageService.returnLocalStorage()

    this.movieService.getMovies()
    .subscribe(movies => {
      this.movies = movies;
      this.favMovies = this.movieService.getFavMovies(currentFavArray, movies)
    });

  }



    // this.movieService.getMovies()
    // .subscribe(movies => {
    //   if (currentFavArray.indexOf(movies.id >= 0 )

    // } );
  }

