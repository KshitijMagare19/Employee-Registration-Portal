import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.fetchEmployee()
  }

  populateForm(record: Employee) {
    this.service.employeeForm.setValue({
      _id: record._id,
      fullname: record.fullname,
      location: record.location,
      position: record.position,
      salary: record.salary,

    })
  }

  deleteRecord(id: string) {
    if (confirm('Are you sure, you want to delete this record?')) {

      this.service.deleteEmployee(id).subscribe(res => {
        this.service.fetchEmployee();
        this.toastr.error('Deleted Sucessfully!', 'Emplyee Deleted.')
      })
    }
  }
}
