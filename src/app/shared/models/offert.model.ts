export interface IOffert {
  id?: number;
  namn: string;
  fran: string;
  till: string;
  avstand: number;
  bostadensYta: number;
  kallare?: number;
  piano: boolean;
  packhjalp: boolean;
  pris: number;
  bilar: number;
  meddelande?: string;
}
