import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timesheetWeekApproval } from '../../../../models/timesheet-week-approval.model';
import { TimesheetWeekApprovalService } from '../../../../models/timesheet-week-approval.service';

@Component({
  selector: 'app-timesheetapprove',
  templateUrl: './timesheetapprove.component.html',
  styleUrl: './timesheetapprove.component.css'
})
export class TimesheetapproveComponent implements OnInit {
  timesheets: any[] = [];;

  public weekTimeSheet: any = [];
  public timesheetData: any[] = [];
  public account: any[] = [];


  public months: string[] = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public years: number[] = [];
  public accountName: string[] = [];

  public selectedMonth: string = '';
  public selectedYear: number;
  public year: number = 2024;
  searchText: any = '';
  public accounts: any[] = [];
  public employee: any[] = [];
  public accountId: number = 0;
  public employeeId: number = 0;
  public userEmpId: number = 0;

  selectedAccount: any;

  constructor(private timesheetService: TimesheetWeekApprovalService, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = this.months[currentDate.getMonth() + 1];
    this.selectedAccount = 2
    this.selectedYear = currentDate.getFullYear();

    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    this.userEmpId = userData.userEmpId || 0;
  }

  ngOnInit(): void {
    this.getAllTimesheets();
    this.timesheetService.getAccounts().subscribe(
      (resp) => {
        this.accounts = resp as any[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllTimesheets(): void {
    this.timesheetService.getAllTimesheets()
      .subscribe(
        (data) => {
          this.weekTimeSheet = data;
        },
        (error) => {
          console.error('Error fetching timesheets:', error);
        }
      );
  }


  get filteredEmployees() {
    return this.employee.filter(emp => emp.firstName.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  OnSelectAccountByAccountId(event: any) {
    const selectedAccountId = event.target.value;

    if (selectedAccountId !== null && selectedAccountId !== undefined) {
      this.accountId = Number(selectedAccountId);
      this.selectedMonth = event.target.value;
      this.timesheetService.getProjectsByAccountId(this.accountId, this.userEmpId)
        .subscribe(
          (resp) => {
            this.weekTimeSheet = resp;
          },
          (error) => {
            console.error('Error fetching timesheets:', error);
          }
        );

    } else {
      console.error('Selected account ID is null or undefined.');
    }
  }


// OnSelectAccountByAccountId(event:any) {


//  const selectedAccount = event.target.value;

//  this.accountId=Number(selectedAccount);


//   this.selectedAccount;
//   this.timesheetService.getProjectsByAccountId(this.userEmpId,this.year,this.accountId)
//   .subscribe(
//     (resp) => {

//       this.weekTimeSheet=resp;

//       console.log(this.weekTimeSheet)
//       console.log(resp)
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// }



  OnSelectAccountByMonth(event: any) {
    this.selectedMonth = event.target.value;

    this.timesheetService.fetchData(this.selectedMonth, this.year, this.accountId)
      .subscribe(
        (resp) => {
          this.weekTimeSheet = resp;
        },
        (error) => {
          console.error(error);
        }
      );
  }



  OnSelectAccount(event: any) {
    const employeeId = event.target.value;
    const month1 = this.selectedMonth;
    this.timesheetService.getProjects(this.userEmpId, month1, this.year, this.accountId, this.employeeId).subscribe(
      (resp) => {

        this.weekTimeSheet = resp;
      },
      (error) => {
        console.error(error);
      }
    );
    return this.employee.filter(emp => emp.firstName.toLowerCase().includes(this.searchText.toLowerCase()));
  }



  goToView(weekTimesheet: timesheetWeekApproval) {
    weekTimesheet.employeeId = this.employeeId;
    weekTimesheet.accountId = this.accountId;

    this.router.navigate(['/manager/dailyStatus'], { state: { weekTimesheet: weekTimesheet } });
  }

}

function subscribe(arg0: (resp: any) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}
