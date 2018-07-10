import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  public post(): Observable<any> {
    return this.http.post('/api/vehicle', {});
  }
}
