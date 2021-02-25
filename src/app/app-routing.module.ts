import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LlistarComponent } from './components/llistar/llistar.component';
import { FormulariComponent } from './components/formulari/formulari.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  { path: 'inici', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'llista',
  canActivate: [AuthGuard],
  component: LlistarComponent },
  { path: 'formulari', component: FormulariComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
