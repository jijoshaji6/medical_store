import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { ReadComponent } from './read/read.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'create',component:CreateComponent,canActivate:[authGuard]},
  {path:'edit/:id',component:EditComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'search/:keyword',component:SearchComponent,canActivate:[authGuard]},
  {path:'view/:id',component:ViewComponent,canActivate:[authGuard]},
  {path:'read',component:ReadComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
