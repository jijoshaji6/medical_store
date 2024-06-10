import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  medicines:Medicine[]=[];
  filter:Medicine[]=[];
  constructor(
    private medicineService:MedicineService,
    private route:ActivatedRoute
  ){}

  ngOnInit():void{}

  searchMedicine(keyword:string):void{
    this.medicineService.searchMedicine(keyword).subscribe((medicines:Medicine[])=>{
      this.filter=medicines.filter((medicine)=>
        medicine.name.toLowerCase().startsWith(keyword.toLowerCase()));
      this.medicines=medicines;
    });
  };
}
