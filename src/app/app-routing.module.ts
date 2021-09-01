import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoggedGuard } from './logged.guard';
import { ClothComponent } from './perfil/cloth/cloth.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'perfil', canLoad: [LoggedGuard],loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
  { path: 'perfil/cloth', component: ClothComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
