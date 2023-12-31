import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campaign } from '../models/campaign.model';
import { Transaction } from '../models/transaction.model';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})

export class CampaignService {

  constructor(private http: HttpClient) {}
  getVerifiedCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/campaigns/public`);
  }

  getAllCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/admin/campaigns`);
  }


  getCurrentUserCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${api}/campaigns/me`);
  }

  getCampaignById(campaignId: string): Observable<Campaign> {
    return this.http.get<Campaign>(`${api}/campaigns/${campaignId}`);
  }

  donate(data: Transaction, campaignId: string): Observable<Transaction> {
    return this.http.post<Transaction>(`${api}/transactions/donate/${campaignId}`, data);
  }


  createCampaign(data: any): Observable<Response> {
    return this.http.post<Response>(`${api}/campaigns/create`, data);
  }


  changeStatus(campaignId: string, status: string): Observable<Response> {
    return this.http.put<Response>(`${api}/admin/campaigns/${campaignId}/status-change`, null, { params: { status } });

  }

  
 
}