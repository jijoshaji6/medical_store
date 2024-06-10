import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loggedUserData: any;
constructor(public authService:AuthService, private router:Router){}

ngOnInit(){
  const token=localStorage.getItem('token');
  if(token){
    this.router.navigate(['read']);
  }
}

loginForm=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
});

signIn(){
  const data={
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  };
  this.authService.login(data).subscribe((res:any)=>{
    localStorage.setItem('token',res.token);
    this.authService.isLogedIn();
    this.router.navigate(['read']);
  });
}

loadReg(){
    this.router.navigate(['register']);
  }
}
