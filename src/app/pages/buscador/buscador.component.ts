import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/* Services */
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/now-playing.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  public texto: string;
  public movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { texto } = params;
      this.texto = texto;

      /* Llamar el servicio */
      this.peliculaService.buscarPelicula(texto).subscribe(movies => {
        this.movies = movies;
      });
    });
  }
}
