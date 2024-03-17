import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatMenuModule } from "@angular/material/menu"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatBadgeModule } from "@angular/material/badge"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatCardModule } from "@angular/material/card"
import { MatSliderModule } from "@angular/material/slider"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSortModule } from "@angular/material/sort"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core"
import { MatRadioModule } from "@angular/material/radio"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatDialogModule } from "@angular/material/dialog"
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { EmpServiceService } from '../../emp-service.service';



@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
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
    HttpClientModule

  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
  submitted:boolean=false

  url:string = "http://localhost:9090/save"



  countrylist = ['India', 'USA', 'Singapore', 'UK']
  termlist = ['15days', '30days', '45days', '60days']

  constructor(private builder: FormBuilder,private empService: EmpServiceService) {

  }

  ngOnInit(): void {
   
  }


  customerform = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.required])),
    phone: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    term: this.builder.control('', Validators.required),
    dob:this.builder.control(new Date(2000,3,25)),
    gender: this.builder.control('Male'),
    is_Active: this.builder.control('true'),
  });

    saveRecord():void{
      
  this.empService.saveEmployee(this.customerform.value)
      .subscribe({
        next: (res:any) => {
          if(res.data)
          {
           
            Swal.fire("Thank You","Record Save successfully","success");
          this.customerform.reset();
            console.log(res);
            this.submitted = true;
            
          }
          else{

            error: (e:any) => console.error(e)
            

          }
          
          
        },
        error: (e:any) => console.error(e)
      });

    }
    
  clearform() {
    this.customerform.reset();
  }
  




}


