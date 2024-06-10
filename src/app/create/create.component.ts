import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private medService:MedicineService,private router:Router){}

  createForm=new FormGroup({
    name:new FormControl(""),
    company:new FormControl(""),
    expiry_date:new FormControl("")
  })

  get name(){
    return this.createForm.get('name');
  }
  get company(){
    return this.createForm.get('company');
  }
  get expiry_date(){
    return this.createForm.get('expiry_date');
  }

  createMedicine(){
    const medicine ={
      name:this.createForm.value.name,
      company:this.createForm.value.company,
      expiry_date:this.createForm.value.expiry_date
    }
    const token=localStorage.getItem('token')
    this.medService.createMedicine(medicine).subscribe((res)=>{
      console.log("Medicine Created");
      this.router.navigateByUrl('read');
    });
  }
}
