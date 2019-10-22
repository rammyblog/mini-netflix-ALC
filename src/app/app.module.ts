import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { MoviePipe } from './remove-spaces.pipe';
import { StorageServiceModule } from  'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    NavbarComponent,
    SearchResultComponent,
    MoviePipe,
    FavouriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false })

  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
