import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchParams: string;

  constructor(private movieService: MovieService){ }

  ngOnInit() {
    this.searchParams = '';

      }


}
