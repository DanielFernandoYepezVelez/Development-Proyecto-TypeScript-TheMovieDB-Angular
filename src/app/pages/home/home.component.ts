import { Component, HostListener, OnInit } from '@angular/core';

/* Services */
import { PeliculasService } from '../../services/peliculas.service';

/* Interfaces */
import { Movie } from 'src/app/interfaces/now-playing.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // console.log('Se disparo con scroll');
    const scrollPosition: number = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const screenMaxHeight: number = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (scrollPosition > screenMaxHeight) {

      if (this.peliculasService.cargando) { return; }

      this.peliculasService.getCartelera().subscribe(movies => {
        this.movies.push(...movies);
      });

      console.log('Llamar Servicio');
    }
  }

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(movies => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }
}
