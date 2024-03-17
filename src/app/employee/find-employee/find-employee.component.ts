import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatInputModule } from "@angular/material/input"
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Employee } from '../../employee';
import { EmpServiceService } from '../../emp-service.service';

@Component({
  selector: 'app-find-employee',
  standalone: true,
  imports: [

    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './find-employee.component.html',
  styleUrl: './find-employee.component.css'
})



export class FindEmployeeComponent {
  @Input() viewMode = false;
 // @Input() id:string='';
  //@Input() id: number=61
  private id:string=''
  
    public emp: any = [];

    customerform = this.builder.group({
      id: this.builder.control('', Validators.required),
      
    });


    
  
  constructor(private builder: FormBuilder,private empService:EmpServiceService){

    
  

  }
  

  findById()
  {

        const obj:any = this.customerform.value;
        console.log(`Id is .. ${obj.id} `)
    this.empService.findRecord(obj.id).subscribe({
      next:(employee:any)=>{

        this.emp = employee;
        console.log("#3#",employee)
        
       
      },

      error: (e)=> console.error("....",e)



    })
    
  }

}
