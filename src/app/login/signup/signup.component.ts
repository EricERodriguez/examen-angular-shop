import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  userspost:any;

  constructor(
    private LoginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    // se hacen las validaciones necesarias

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      apellido: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  // funcion para enviar datos
  doSubmit() {

    if (this.registerForm.invalid) {
      alert("Completa todos los campos!!");
      return;
    }else{
      alert(`Gracias por registrarse`)
      this.router.navigateByUrl("/ogin/signin")
    }

    const { username, password, email, apellido } = this.registerForm.value
    this.LoginService.doRegister(username, password, email)

    


    // se guardan los datos en el localstorage
    localStorage.setItem( "email", email)
    localStorage.setItem( "password", password)
    localStorage.setItem( "username", username)
    localStorage.setItem( "apellido", apellido)
    this.LoginService.saveUser(localStorage.getItem(username))

    this.LoginService.postUser( {
      email: email,
      password: password,
      apellido: apellido,
      roles: "ADMIN"
 }      ).subscribe(data => {
      this.userspost = data.data;
    }
      );
  }

}
