import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NowPlayingResponse } from '../interfaces/now-playing.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  constructor(private http: HttpClient) { }

  getCartelera(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=4d142929e92c52183f0266f0cb5e94cc&language=en-ES&page=1');
  }
}
