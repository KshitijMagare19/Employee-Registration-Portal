import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
  ]
})
export class EmployeeFormComponent {

  submitted: Boolean = false;

  constructor(public service: EmployeeService, private toastr: ToastrService) { }

  onSubmit() {
    this.submitted=true;
    if (this.service.employeeForm.valid)
      {
        this.service.postEmployee().subscribe(res=>{
          this.resetForm();
          this.service.fetchEmployee();
          this.toastr.success('Created Sucessfully!','Emplyee Registered.')       
        })
      }
    else
      console.log("error");

  }

  resetForm(){
    this.service.employeeForm.reset();
    this.submitted = false;
  }
}
