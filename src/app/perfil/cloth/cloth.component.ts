import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClothService } from '../../login/cloth.service';
import { LoginService } from '../../login/login.service';

@Component({
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {
  data: any;

  cloth:any;


  postclothForm!: FormGroup;

  constructor(public LoginService: LoginService, public ClothService: ClothService, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.ClothService.getClothing().subscribe(data => {
      this.data = data.data.results});


      this.postclothForm = this.fb.group({
        cantidad: ['', Validators.required],
        precio: ['', Validators.required],
        tipo: ['', Validators.required],
        descripcion: ['', Validators.required],
        linkImage: ['', Validators.required],
      })
  }

  submit(){

    if (this.postclothForm.invalid) {
      alert("Completa todos los campos!!");
      return;
    }else{
      alert("cargado con exito");
      this.router.navigateByUrl("/perfil")
    }
    const { cantidad, precio, tipo, descripcion, linkImage } = this.postclothForm.value

    this.ClothService.postCloth( {
      tipo: [tipo],
      cantidad: cantidad,
      precio: precio,
      descripcion:descripcion,
      linkImage:linkImage,
 }      ).subscribe(data => {
      this.cloth = data.data;
      console.log(this.cloth)
    }
      );
  }

}
