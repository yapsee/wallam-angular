import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { environment } from 'src/environments/environment';

const api = environment.api;
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}
  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/admin/transactions`);
  }

  
 
}