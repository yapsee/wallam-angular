import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyResponse } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export abstract class RestService {
  abstract endpoint(): string;
  constructor(private http: HttpClient) {}

  get url() {
    return `${environment.api}`;
  }
  all(currentUrl: string | null = null): Observable<MyResponse> {
    if (!currentUrl) {
      currentUrl = `${this.url}/${this.endpoint()}`;
    }
    return this.http.get<MyResponse>(currentUrl);
  }
  remove(id: number) {
    return this.http.delete<MyResponse>(`${this.url}/${this.endpoint()}/${id}`);
  }
  create(data: any): Observable<MyResponse> {
    return this.http.post<MyResponse>(`${this.url}/${this.endpoint()}`, data);
  }

  one(id: number): Observable<MyResponse> {
    return this.http.get<MyResponse>(`${this.url}/${this.endpoint()}/${id}`);
  }

  update(data: any): Observable<MyResponse> {
    return this.http.put<MyResponse>(
      `${this.url}/${this.endpoint()}/${data.id}`,
      data
    );
  }
}
