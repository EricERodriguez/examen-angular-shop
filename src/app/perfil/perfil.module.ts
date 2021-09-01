import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { ComponenteUsuarioComponent } from './componente-usuario/componente-usuario.component';
import { ModalComponent } from './componente-usuario/modal/modal.component';
import { ClothComponent } from './cloth/cloth.component';
import { PostclothComponent } from './cloth/postcloth/postcloth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilComponent,
    MisDatosComponent,
    ComponenteUsuarioComponent,
    ModalComponent,
    ClothComponent,
    PostclothComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfilModule { }
