import { Component , Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { EmpServiceService } from '../../emp-service.service';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon"
import { MatCardModule } from "@angular/material/card"
import { MatSelectModule } from "@angular/material/select"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatMenuModule } from "@angular/material/menu"
import { MatButtonModule } from "@angular/material/button"
import { MatBadgeModule } from "@angular/material/badge"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatSliderModule } from "@angular/material/slider"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSortModule } from "@angular/material/sort"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core"
import { MatRadioModule } from "@angular/material/radio"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatDialogModule } from "@angular/material/dialog"
import Swal from 'sweetalert2';
import { Employee } from '../../employee';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
    

  
  ],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  //router = inject(Router);
  route = inject(ActivatedRoute)
  employee!:Employee
  isEdit:boolean=false
  id!:number

  @Input() data:Employee |null = null;


  customerform = this.builder.group({
    name: this.builder.control('', [Validators.required]),
    email: this.builder.control('', [Validators.required, Validators.email]),
    phone: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    term: this.builder.control('', Validators.required),
    dob:this.builder.control(new Date(2000,3,25)),
    gender: this.builder.control('Male'),
    is_Active: this.builder.control('true'),
  });

  countrylist = ['India', 'USA', 'Singapore', 'UK']
  termlist = ['15days', '30days', '45days', '60days']

  constructor(private builder: FormBuilder,private empService: EmpServiceService) {

    

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    if(this.id)
    {
        this.isEdit = true
        this.empService.findRecord(this.id).subscribe(employee=>{
          this.customerform.patchValue(employee)
        })
    }
    
  }

  
  
  updateRecord():void{
    console.log(this.customerform.value);
    const emp: Employee = {
      name: this.customerform.value.name!,
      email: this.customerform.value.email!,
      phone: this.customerform.value.phone!,
      country: this.customerform.value.country!,
      address: this.customerform.value.address!,
      term: this.customerform.value.term!,
      dob: this.customerform.value.dob!,
      gender: this.customerform.value.gender!,
      is_Active: this.customerform.value.is_Active!,
    };
    
    
      if (this.isEdit) {
      
        console.log(`The name is ${emp.name} `)  
        this.empService.updateEmployee(this.id,emp)
        .subscribe({
          next: (res:any) => {
            if(res.data)
            {
             // this.router.navigateByUrl('/employee');
              Swal.fire("Thank You","Record Save successfully","success");
            this.customerform.reset();
              console.log(res);
              
              
            }
          }
          });

        }
            else{
  
              error: (e:any) => console.error(e)
              
  
            }
            
            
          }
          
        }
  
   

