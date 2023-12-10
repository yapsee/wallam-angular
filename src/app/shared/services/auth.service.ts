import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MyResponse } from '../models/response';

const api = environment.api;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  authentification(data: any) {
    return this.http.post(`${api}/users/auth/login`, data);
  }

  register(data: any): Observable<Response> {
    return this.http.post<Response>(`${api}/users/auth/register`, data);
  }
 
  getUser(): Observable<Response> {
   
    return this.http.get<Response>(`${api}/users/auth/current-user`);
  }
 
}
