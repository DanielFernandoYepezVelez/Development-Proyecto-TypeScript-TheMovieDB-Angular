import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { Movie } from '../../interfaces/now-playing.interface';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
