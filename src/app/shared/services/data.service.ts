import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }

  hhtp(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }
  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  getSingel(id) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  create(resource) {
    const headers = new Headers();
    this.hhtp(headers);
    return this.http.post(this.url, JSON.stringify(resource), {headers: headers})
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.patch(`${this.url}/${resource.offertId}`, JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  delete(offertId) {
    return this.http.delete(`${this.url}/${offertId}`)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError('Bad Request');
    }

    if (error.status === 404) {
      return throwError('NotFound');
    }

    return throwError('Error');
  }

}
