import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!: any;
  medicine={name:'',company:'',expiry_date:''};
  constructor(private medService:MedicineService,private route:ActivatedRoute,private router:Router, private location:Location){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.medService.getMedicine(this.id).subscribe((res)=>{
      this.medicine=res;

      this.editForm.patchValue({
        name:this.medicine.name,
        company:this.medicine.company,
        expiry_date:this.medicine.expiry_date
      });
    });
  }

  editForm=new FormGroup({
    name: new FormControl('',Validators.required),
    company:new FormControl('',Validators.required),
    expiry_date:new FormControl('',Validators.required)
  });

  get name(){
    return this.editForm.get('name')
  }
  get company(){
    return this.editForm.get('company')
  }
  get exp_date(){
    return this.editForm.get('expiry_date')
  }

  editMedicine(){
    const medicine={
      name:this.editForm.value.name,
      company:this.editForm.value.company,
      expiry_date:this.editForm.value.expiry_date
    };
    const token=localStorage.getItem('token')
    this.id=this.route.snapshot.params['id'];
    this.medService.editMedicine(this.id,medicine).subscribe((res)=>{
      this.router.navigate(['view',this.id]);
    })
  }
  back(){
    this.location.back();
  }
}
