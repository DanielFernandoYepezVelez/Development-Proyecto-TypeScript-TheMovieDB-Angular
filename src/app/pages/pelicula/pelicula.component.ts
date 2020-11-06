import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Services */
import { PeliculasService } from '../../services/peliculas.service';

/* Interfaces */
import { Cast } from '../../interfaces/response-credits.interface';
import { ResponseMovieDetails } from 'src/app/interfaces/response-movie-details.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  public cast: Cast[] = [];
  public pelicula: ResponseMovieDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    /* ESTE OPERADOR RXJS ME AYUDA A DISPARAR LOS OBSERVABLES UNA SOLA VEZ,
    INTERNAMENTE ESTA CONFORMADA POR OBSERVABLES */
    combineLatest([
      this.peliculasService.getPeliculaDetail(id),
      this.peliculasService.getCast(id),

    ]).subscribe(( [pelicula, cast]  ) => {

      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });

    /* Llamar El Servicios */
    /* this.peliculasService.getPeliculaDetail(id).subscribe((movie) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = movie;
    }); */

    /* this.peliculasService.getCast(id).subscribe((cast) => {
      // console.log(cast);
      this.cast = cast.filter(actor => actor.profile_path !== null);
    }); */
  }

  public onRegresar(): void {
    this.location.back();
  }
}
