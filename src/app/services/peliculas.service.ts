import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Interfaces */
import { NowPlayingResponse, Movie } from '../interfaces/now-playing.interface';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  public cargando = false;
  private carteleraPage = 1;
  private baseUrl = 'https://api.themoviedb.org/3';

  // tslint:disable-next-line: typedef
  get queryParams() {
    return {
      api_key: '4d142929e92c52183f0266f0cb5e94cc',
      language: 'en-ES',
      page: this.carteleraPage.toString(),
    };
  }

  constructor(private http: HttpClient) {}

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this.http
      .get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`, {
        params: this.queryParams,
      })
      .pipe(
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        }),
        map((res) => res.results)
      );
  }
}
