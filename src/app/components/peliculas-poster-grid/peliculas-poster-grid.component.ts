import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  public onMovieDetails(movie: Movie): void {
    // console.log(movie);
    this.router.navigate(['/pelicula', movie.id]);
  }
}
