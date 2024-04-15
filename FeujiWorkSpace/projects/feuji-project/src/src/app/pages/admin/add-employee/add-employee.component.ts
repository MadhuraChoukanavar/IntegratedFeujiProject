import { Component } from '@angular/core';
import { Employee } from '../../../../models/employee.model';
import { EmployeeService } from '../../../../models/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  public employee:any=Employee;

  emp:Employee=new Employee(0,'','','','','','','',new Date(),0,'','',0,'',new Date(),'','','',0,new Date(),'',new Date());

  constructor(private empService:EmployeeService) { }
  SendEmployee(emp:any){
    console.log(emp);
    this.empService.saveEmployee(emp).subscribe(res=>this.employee=res);
    console.log("hiiiiii");

  }

}
