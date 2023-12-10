import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyResponse } from '../models/response';
import { environment } from 'src/environments/environment';
const api = environment.api;

@Injectable({
  providedIn: 'root'
})

export class CampaignService {

  constructor(private http: HttpClient) {}
  getAllCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/campaigns/public`);
  }

  getCurrentUserCampaigns(): Observable<MyResponse> {
    return this.http.get<MyResponse>(`${api}/campaigns/me`);
  }
 
  getCampaignById(campaignId: String | undefined): Observable<MyResponse> {
    return this.http.get<MyResponse>(`${api}/campaigns/${campaignId}`);
  }
 
}