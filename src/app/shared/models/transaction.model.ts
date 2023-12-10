export interface Transaction {
  id?: string;
  status?: string;
  provider?: string;
  paydunyInvoiceUrl?: string | null;
  dateCreated?: string;
  comment: string;
  amount: string;
  donatorName: string | null;
}