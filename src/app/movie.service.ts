import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './movie-data';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  private moviesUrl = 'api/MOVIES';  // URL to web api
  moviesArray: Movie[];


 getFavMovies(favMovieArray, allMovies){
   console.log(favMovieArray, allMovies );

   return allMovies.filter(movie => favMovieArray.includes(+movie.id))
 }



  reducer = (accumulator, currentValue) => accumulator + currentValue;


  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(_ => console.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
      )

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 */

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getMovie(id): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;

    return this.http.get<Movie>(url).pipe(
      tap(_ => console.log('fetched movies')),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))

    )


  }


  getAverageRating(ratingArr){
    return ratingArr.reduce(this.reducer) / ratingArr.length;
  }

  searchMovies(movieName: string): Observable<Movie[]>{
    if(!movieName.trim()){
      return of([])
    }

    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${movieName}`).pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    )

  }


  // searchMovie(searchTitle: string) {
  //   this.getMovies()
  //   .subscribe(movies => this.moviesArray = movies);
  //   console.log(this.moviesArray);


  //   // return this.moviesArray.filter(word => word.title.includes(searchTitle));

  // }



}

