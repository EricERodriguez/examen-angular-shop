import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor(private http: HttpClient) { }

  // funcion necesaria para que se traigan todos los datos del backend y mostrarlos en tabla y solos

  getClothing(): Observable<any>{
    return this.http.get('http://localhost:3003/ropa');
  }

  // Es la funcion post para crear nuevas publicaciones

  postCloth(tipo: any, linkImage: any="" ): Observable<any>{
    // console.log(this.http.post('http://localhost:3003/ropa', tipo, linkImage ).subscribe(data => {console.log( data)}))
    return this.http.post('http://localhost:3003/ropa', tipo, linkImage );
  }
}
