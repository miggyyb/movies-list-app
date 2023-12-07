import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  template: ``,
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  @Input() movies: any;
}
