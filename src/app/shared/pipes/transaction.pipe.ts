import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Pipe({
  name: 'completedTransaction'
})
export class TransactionPipe implements PipeTransform {

  transform (transactions: Transaction[]): Transaction[] {
    return transactions.filter((transaction) => transaction.status === 'COMPLETED');
  }
}
