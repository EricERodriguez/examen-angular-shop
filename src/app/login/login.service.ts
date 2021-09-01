import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogged: boolean = false;
  public isRegister: boolean = false;
  public user: any = 'admin';
  public password: any = "";
  public tokensData: any;


  constructor(private http: HttpClient) {
  }

  arrayUser:any;


  // esta funcion es necesaria para que genere el token, como te abras dado cuenta utilice el localstorage para crear los usuarios y loguearse asi que no tenia el token, esta es necesaria para que genere el token

  loginUser(email: any, password: any = "" ): Observable<any>{
    console.log(this.http.post('http://localhost:3003/auth/login', email, password).subscribe(data => {console.log(this.tokensData = data)}))
    return this.http.post('http://localhost:3003/auth/login', email, password);
  }

  // trae todos los usuarios del backend, no se para q lo queria usar y al final no lo use

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3003/usuarios');
  }

  postUser(email: any, password: any="" ): Observable<any>{
    // console.log(this.http.post('http://localhost:3003/ropa', tipo, linkImage ).subscribe(data => {console.log( data)}))
    return this.http.post('http://localhost:3003/auth/registro', email, password );
  }
  // funcion para poder registrarse si se entran vacios se dara una alerta de que al falta


  doRegister(username: string, password: string, email: string){
    if (username != "" && password != "" && email != "") {
      this.isRegister = true;
      window.alert(`Registro Compeltado ${username}`)

    }else{
      throwError("Invalid user or password")
    }
  }

  // funcion para poder loguear, compara los datos ingrresados con los datos guardado en el localstorage, se usa el operador logico OR por si quiere entrar el admin si necesidad de llamar al backend(si se que esta totalmente horrible pero es solo de prueba)

  doSignIn(username: string, password: string): Observable<any> {
    let response: Observable<any>;
    var user = localStorage.getItem("email") || "admin"
    var contra = localStorage.getItem("password") || "admin"
    if (username === user && password === contra ) {
      this.isLogged = true;
      response = of({
      })
    }else{
      response = throwError("Invalid user or password")
    }
    return response.pipe(delay(100));
  }

  // esta funcion guarda el usuario para luego mostralo 

  saveUser=(usuario:any)=>{
    this.user = usuario
  }
  // esta funcion esta hiperhardcodeada para nada recomendable pero anda
  logOut(){
    this.isLogged = false
    location.reload()
  }
}
