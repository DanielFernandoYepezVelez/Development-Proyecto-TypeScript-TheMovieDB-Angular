import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/* Services */
import { PeliculasService } from '../../services/peliculas.service';
import { ResponseMovieDetails } from 'src/app/interfaces/response-movie-details.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  public pelicula: ResponseMovieDetails;

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private location: Location) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    /* Llamar El Servicio */
    this.peliculasService.getPeliculaDetail(id).subscribe(movie => {
      console.log(movie);
      this.pelicula = movie;
    });
  }

  public onRegresar(): void {
    this.location.back();

  }
}
