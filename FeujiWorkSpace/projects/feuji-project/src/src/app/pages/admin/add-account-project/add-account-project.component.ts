import { Component, OnInit } from '@angular/core';
import { Accountproject } from '../../../../models/accountproject.model';
import { AccountprojectService } from '../../../../models/accountproject.service';

@Component({
  selector: 'app-add-account-project',
  templateUrl: './add-account-project.component.html',
  styleUrl: './add-account-project.component.css'
})
export class AddAccountProjectComponent implements OnInit{
  accountList: any[] = [];
  employeeList: any[] = [];
  public project:any=Accountproject;
  public accountProject: Accountproject = new Accountproject(0, '', '', 0, 0, 0, 0.0, new Date(), new Date(), new Date(), new Date(), 0, false, false, false, '', '', new Date(), '', new Date());
  projectDetails:any=[];
  // pro:any=[];
  constructor(private accountProjectService: AccountprojectService) {}
  ngOnInit(): void {
    
    this.getAccountNames();
    this.getEmployeeName();
  }
  SendAccountProject(project: any) {
    
    alert(JSON.stringify(project));
    this.projectDetails=JSON.stringify(project);

    alert(this.projectDetails);
    this.accountProjectService.saveAccountProject(this.projectDetails).subscribe(
      (res: any) => {
        this.accountProject = res;
        console.log("Request successful");
      },
      (error: any) => {
        console.error("Error occurred:", error);
      }
    );
    }
    getAccountNames(): void {
     
      this.accountProjectService.getAccountName().subscribe(
        (data) => { 
          this.accountList = data;
        },
        error => {
          console.error('Error occurred while fetching account names:', error);
        }
      );
    }

    getEmployeeName(): void {
 
      this.accountProjectService.getEmployeeName().subscribe(
        (data) => { 
          this.employeeList = data;
        },
        error => {
          console.error('Error occurred while fetching account names:', error);
        }
      );
    }

   

    
    
    }

  
  

  
  


// function item(item: any) {
//   throw new Error('Function not implemented.');
// }

