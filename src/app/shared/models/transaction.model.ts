import { Transaction } from "./campaign.model";

export interface Campaign {
  id?: string;
  title: string;
  description: string;
  kind?: string;
  image?: string;
  status?: string;
  target: string;
  dateCreated?: string;
  account?: string;
  user?: string;
  progress?: number;
  userName: string;
  accountBalance?: number;
  transactions?: Transaction[];
}