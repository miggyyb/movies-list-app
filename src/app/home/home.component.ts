import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies = [
    {
      "id": 'avengers',
      "title": 'Avengers: Age of Ultron',
      "image": '/assets/Avengers.png',
      "route": 'avengers-details',
      "date": new Date(2015,5,1),
      "isFav": false
    },
    {
      "title": 'Spider-Man: Into The Spider-Verse',
      "image": '/assets/Spider Man.png',
      "route": 'spider-verse',
      "date": new Date(2018,12,14),
      "isFav": false
    },
    {
      "title": 'Knives Out',
      "image": '/assets/Knives Out.png',
      "route": 'knivesout',
      "date": new Date(2019,11,27),
      "isFav": false
    },
    {
      "title": 'Tenet',
      "image": '/assets/Tenet.png',
      "route": 'tenet',
      "date": new Date(2020,9,3),
      "isFav": true
    },
    {
      "title": 'Guardians of The Galaxy',
      "image": '/assets/Guardians of The Galaxy.png',
      "route": 'gotg',
      "date": new Date(2014,8,1),
      "isFav": false
    }
  ]
  constructor() {}
  public sortMoviesTitleAsc(): void {
    this.movies = this.movies.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); //strings
  }
  public sortMoviesTitleDesc() {
    this.movies = this.movies.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0));
  }
  public sortMoviesDateAsc(): void {
    this.movies = this.movies.sort((a, b) => Number(a.date) - Number(b.date)); //numbers
  }
  public sortMoviesDateDesc(): void {
    this.movies = this.movies.sort((a, b) => Number(b.date) - Number(a.date));
  }
  Watched($event) {
    //this.movies = this.movies.map((a) =>  a.isFav);
    const id = $event.target.value;
    const isWatched = $event.target.checked;

    this.movies = this.movies.map((a)=>{
      if (a.id == id){
        a.isFav = isWatched
        return a
      }
      return a
    })
  }
  //ngOnInit(): void{
    //this.moviesService.getMovies().subscribe((movies) => this.movies = movies);
  //}
}

