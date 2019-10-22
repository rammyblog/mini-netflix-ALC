import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

   movie: Movie;
   avgRating;
  defaultImageUrl = "https://dummyimage.com/337x500/f9f9f9/000000.png&text=No+Image"

  //  favMoviesId: any[];
   favStatus = false;



      constructor(
        private route: ActivatedRoute,
        private movieService: MovieService,
        private location: Location,
        private localStorageService: LocalStorageService
      ) { }




      getMovie(id: number): void {
       let currentFavArray = this.localStorageService.returnLocalStorage()

       if(currentFavArray.indexOf(id) >= 0){
         this.favStatus = true;
        }

      // tslint:disable-next-line: align
      this.movieService.getMovie(id)
      .subscribe(movie => {
      this.movie = movie;
      this.getRating(movie);
      });

      }

      getRating(movie: Movie){
        this.avgRating = this.movieService.getAverageRating(movie.ratings).toFixed(2);
      }


      ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getMovie(id);
        // this.favMovie();
      }




      goBack(): void {
        this.location.back();
      };


      favMovie(movieid){
        const favMoviesId = [];
        const STORAGE_KEY = 'favMovies-id';
        this.favStatus = !this.favStatus;

        if(this.favStatus){
          this.localStorageService.storeOnLocalStorage(movieid);
        }

        if(!this.favStatus){
          this.localStorageService.deleteFromLocalStorage(movieid);

        }

        }


      }

