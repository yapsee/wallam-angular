import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionPipe } from './transaction.pipe';



@NgModule({
  declarations: [TransactionPipe],
  
  exports: [
    TransactionPipe
  ]
})
export class PipesModule { }
