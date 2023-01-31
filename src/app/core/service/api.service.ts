import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string = 'http://localhost:3000/tasks';
  constructor(private httpClient: HttpClient) { }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(`${this.API_URL}${url}`, { params })
      .pipe(catchError(throwError));
  }

  post(url: string, body: Object = {}): Observable<any> {
    return this.httpClient.post(`${this.API_URL}${url}`, body)
      .pipe(catchError(throwError));
  }
}
