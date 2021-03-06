import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OffertService extends DataService {

  constructor(http: Http) {
    super('http://localhost:5555/erbjudanden', http);
   }
}
