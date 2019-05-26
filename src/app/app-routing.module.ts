import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {IntranetComponent} from './intranet/intranet.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'intranet', component: IntranetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
