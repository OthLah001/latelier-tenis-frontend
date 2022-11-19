import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {
  private BASE_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, params = {}): Observable<any> {
    return this.http.get(`${this.BASE_URL}${url}`, { params }).pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
