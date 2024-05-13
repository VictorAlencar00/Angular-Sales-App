import { Adress } from '../adress/adress.dto';

export interface Supplier {
  id?: number;
  companyName: string;
  contactName: string;
  contactTitle?: string;
  adress: Adress;
}
