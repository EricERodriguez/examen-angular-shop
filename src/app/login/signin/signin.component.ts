import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;

  users: any;

  token:any;

  constructor(
    public LoginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    // se establecen los validadores

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // funcion para enviar los datos
  doSubmit() {

    if (this.loginForm.invalid) {
      alert("Fill in all the fields ");
      return ;
    }

    const { username, password } = this.loginForm.value
    this.LoginService.doSignIn(username, password).subscribe(
      (res) => {
        console.log(res)
        this.router.navigateByUrl("/perfil")
      },
      (err) => {
        alert(err)
      }
    )
    // se guarda el email en el localstorage para luego llamarlo en el navbar
    this.LoginService.saveUser(localStorage.getItem("email"))

  }

  

}
