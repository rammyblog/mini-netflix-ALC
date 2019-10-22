import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'movie/search/:title', component: SearchResultComponent },
  {path: 'favorite/movies', component: FavouriteMoviesComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
