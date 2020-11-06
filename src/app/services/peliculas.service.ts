import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

/* Interfaces */
import { NowPlayingResponse, Movie } from '../interfaces/now-playing.interface';
import { ResponseMovieDetails } from '../interfaces/response-movie-details.interface';
import { ResponseCredits, Cast } from '../interfaces/response-credits.interface';

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

  public getCartelera(): Observable<Movie[]> {
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

  public resetCarteleraPage(): void {
    this.carteleraPage = 1;
  }

  public buscarPelicula(query: string): Observable<Movie[]> {
    const params = { ...this.queryParams, page: '1', query };

    return this.http
      .get<NowPlayingResponse>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((res) => res.results));
  }

  public getPeliculaDetail(id: string): Observable<ResponseMovieDetails> {
    return this.http.get<ResponseMovieDetails>(`${this.baseUrl}/movie/${id}`, { 
      params: this.queryParams
    })
    .pipe(catchError(err => of(null)));
  }

  public getCast(id: string): Observable<Cast[]> {
    return this.http.get<ResponseCredits>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.queryParams
    })
    .pipe(
      map(res => res.cast),
      catchError(err => of([]))
      );
  }


}
