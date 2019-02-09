import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsAPIService {

  constructor(private http: HttpClient) { }

  public getAPI(cant: number): Observable<any> {
    return this.http.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${cant}`);
  }
}
