import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {
  allMedicine:Medicine[]=[];
  constructor(
    private medicineService:MedicineService,
    private router:Router,
    private authService:AuthService
  )
  {
    const token=localStorage.getItem('token')
    this.medicineService.getAllMedicine().subscribe((res)=>{
      this.allMedicine=res;
    });
  }
  view(id:any){
    this.router.navigate(['view',id])
  }
}
