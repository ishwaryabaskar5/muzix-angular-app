import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Track } from './track';
import { throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { RootObject } from './search';
import { Results } from './search';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private getTrackUrl = 'http://localhost:8080/api/v1/tracks';
  private saveTrackUrl = 'http://localhost:8080/api/v1/track';
  private getTopTrackUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=' +
    'disco&api_key=df9d92a1dc8e4162e4808d2654ed8b62&format=json';
  private searchUrl;

  // dependency injection
  constructor(private httpClient: HttpClient) { }

  getTopTracks(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.getTopTrackUrl).pipe(catchError(this.errorHandler));
  }

  getTrackList(): Observable<Track[]> {
    return this.httpClient.get<Track[]>(this.getTrackUrl).pipe(catchError(this.errorHandler));
    // .pipe(delay(1000))
  }

  saveTrack(track: Track): Observable<Track> {
    return this.httpClient.post<Track>(this.saveTrackUrl, track).pipe(catchError(this.errorHandler));
  }

  deleteTrack(id: number): Observable<Track> {
    return this.httpClient.delete<Track>('http://localhost:8080/api/v1/track/' + id).pipe(catchError(this.errorHandler));
  }

  updateTrack(id: number, track: Track): Observable<Track> {
    return this.httpClient.put<Track>('http://localhost:8080/api/v1/track/' + id, track).pipe(catchError(this.errorHandler));
  }

  searchTrackByName(trackName: string): Observable<RootObject> {
    this.searchUrl = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=df9d92a1dc8e4162e4808d2654ed8b62&format=json`;
    return this.httpClient.get<RootObject>(this.searchUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
