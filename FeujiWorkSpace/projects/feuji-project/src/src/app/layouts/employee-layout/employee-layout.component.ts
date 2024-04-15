import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.css'
})
export class EmployeeLayoutComponent {


  @Input() showDashboard: boolean = false;
  menuOptions: string[] = [];
  isArrowRotated1: boolean = false;
  isArrowRotated2: boolean = false;
  
  updateMenuOptions(options: string[]) {
    this.menuOptions = options;
  }
  
  toggleSubmenu(submenuClass: string) {
    const submenu = document.querySelector(`.${submenuClass}`);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }
  rotateArrow(arrowVariable: string) {
    (this as any)[arrowVariable] = !(this as any)[arrowVariable];
  
   
  // submenu5Visible: boolean = false;
  // submenu6Visible: boolean = false;

  // toggleSubmenu(submenu: string) {
  //   if (submenu === 'submenu5') {
  //     this.submenu5Visible = !this.submenu5Visible;
  //   } else if (submenu === 'submenu6') {
  //     this.submenu6Visible = !this.submenu6Visible;
  //   }
  // }
//   submenu6Visible: boolean = false;

  // isArrowRotated1: boolean = false;



// toggleSubmenu(submenu: string) {
//   this.submenu6Visible = !this.submenu6Visible;
//   this.isArrowRotated = !this.isArrowRotated;
// }



}

public empName:string|null='';
public user:any;
ngOnInit(): void {
  const user = localStorage.getItem("user");
  if (user) {
    this.user = JSON.parse(user);
    this.empName=this.user.userName
  }
}
}