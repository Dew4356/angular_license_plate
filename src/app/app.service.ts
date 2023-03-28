import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FastApiService {
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'http://127.0.0.1:8000';
  }

  public licenPlate(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/lp-detection/', data);
  }

  public carColor(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/car-color/', data);
  }
}
