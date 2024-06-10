import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medical_Store_Exam';
  constructor(public authService:AuthService,private router:Router){}

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
