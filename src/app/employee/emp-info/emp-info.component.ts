import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,inject} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { EmpServiceService } from '../../emp-service.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';


@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [MatTableModule, RouterLink,UpdateEmployeeComponent],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css'
})
export class EmpInfoComponent implements OnInit {
  router = inject(Router);
 
  url:string = "http://localhost:9090/employee";
 emp:Employee[] = [];
 employee!:Employee;
 id!:number
 
 
  
  constructor(private empService:EmpServiceService){

  }
  ngOnInit(): void {
    this.allRecord();
  }

  updateRecord(id: number) {
    console.log(id);
    this.router.navigateByUrl('/employee/update/' + id);
  }

  allRecord()
  {
    

    this.empService.fetchRecord().subscribe({
      next:(employee:Employee[])=>{

        this.emp = employee;
            
      },

      error: (e)=> console.log("....",e)
    })
    
  }

  deleteRecord(id: number) {
    this.empService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.allRecord();
      },

      error: (e)=> console.log("....",e)
    });
  }

  
  

}
