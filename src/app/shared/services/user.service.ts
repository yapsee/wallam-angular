import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
const api = environment.api;
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/admin/users`);
  }

  updateUser(userId: String, updatedUser: any): Observable<any> {
    const url = `${api}/admin/users/${userId}/update`;
    return this.http.put(url, updatedUser);
  }
  
  addUser(user: any): Observable<any> {
    const url = `${api}/users/auth/register`;
    return this.http.post(url, user);
  }
 
}