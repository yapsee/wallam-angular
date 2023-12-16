import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions!: any[];

  constructor(
    private transactionService: TransactionService
  ) {

  }

  ngOnInit(): void {

    this.transactionService.getTransactions().subscribe(
      (responseData: any) => {
       this.transactions = responseData
       this.filterTransactions('ALL');
      }
    );
  
  }

  filteredTransactions = this.transactions; 
  filterTransactions(status: string) {
    if (status === 'ALL') {
      this.filteredTransactions = this.transactions;
    } else {
      this.filteredTransactions = this.transactions.filter(transaction => transaction.status === status);
    }
  }
 
}
