import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id!: string;
  medicine!: Medicine;
  constructor(
    private medService:MedicineService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit():void{
    const id=this.route.snapshot.params['id'];
    const token=localStorage.getItem('token')
    this.medService.getMedicine(id).subscribe((res)=>{
      this.medicine=res;
    });
  }

  edit(id:any){
    this.router.navigate(['edit',id])
  }

  delete(){
    const id = this.medicine.id;
    this.medService.deleteMedicine(id).subscribe(()=>{
      this.router.navigate(['read']).then(()=>{
        window.location.reload();
      });
    })
  }
}
