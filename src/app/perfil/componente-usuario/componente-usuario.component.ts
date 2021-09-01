import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { ClothService } from '../../login/cloth.service';

@Component({
  selector: 'app-componente-usuario',
  templateUrl: './componente-usuario.component.html',
  styleUrls: ['./componente-usuario.component.scss']
})
export class ComponenteUsuarioComponent implements OnInit {
  data: any;

  users: any;

  token:any;

  email: any = localStorage.getItem("email")
  usuario: any = localStorage.getItem("username")
  apellido:any = localStorage.getItem("apellido")
  roles:any = "ADMIN"


  showModal:boolean = false;

  constructor(public LoginService: LoginService, public ClothService: ClothService) { }


  ngOnInit(): void {
    this.ClothService.getClothing().subscribe(data => {
          this.data = data.data.results});

    this.LoginService.getUsers().subscribe(data => {
        this.users = data.data.results;
      });

      // aca cambiar la linea de email y password por algo creado en la base de datos, por lo menos el token se guarda solo jaja

      this.LoginService.loginUser({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
      }      ).subscribe(data => {
        this.token = data.data.token;
      console.log(this.token);
      let token = "token"
      localStorage.setItem(token, this.token);
      }
        );

        console.log(this.users)
  }
}
