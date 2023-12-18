import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const api = environment.api;
@Injectable({
  providedIn: 'root'
})
export class WithdrwawService {


  constructor(private http: HttpClient) {}
  getAllInvoices(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/admin/withdraws`);
  }

  pay(withdrawId: string, status: string): Observable<Response> {
    return this.http.put<Response>(`${api}/admin/withdraws/${withdrawId}/wire`, null, { params: { status } });

  }

  askForPayment(campaignId: string, data: any): Observable<Response> {
    return this.http.post<Response>(`${api}/withdraws/${campaignId}`, data);

  }
}
