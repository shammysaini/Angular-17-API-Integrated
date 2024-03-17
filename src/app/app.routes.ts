import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './header/menu/menu.component';
import { RegistrationFormComponent } from './form/registration-form/registration-form.component';
import { AppComponent } from './app.component';
import { EmpInfoComponent } from './employee/emp-info/emp-info.component';
import { FindEmployeeComponent } from './employee/find-employee/find-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

export const routes: Routes = [

    {path:'',title:'Home',component:MenuComponent},
    {path:'save',component:RegistrationFormComponent},
    {path:'employee',component:EmpInfoComponent},
    {path:'employee/:id',component:FindEmployeeComponent},
    {path:'employee/update/:id',component:UpdateEmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }