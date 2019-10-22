import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  movies$: Movie[];
  defaultImageUrl = "https://dummyimage.com/337x500/f9f9f9/000000.png&text=No+Image"
  movieQuery: string;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {

    // const title = this.route.snapshot.paramMap.get('title');
    // console.log(title);

    this.route.params.subscribe(routeParams => {
      console.log(routeParams.title)
      this.searchMovie(routeParams.title.split('+').join(' '))
      this.movieQuery = routeParams.title;
    })

  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }




}

searchMovie(query): void{

  if (query === undefined){
    return
  }
  
  this.movieService.searchMovies(query)
  .subscribe(movie => this.movies$ = movie )
}

}
