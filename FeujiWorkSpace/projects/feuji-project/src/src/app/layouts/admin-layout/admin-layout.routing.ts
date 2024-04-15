import { Routes } from '@angular/router';
import { AddEmployeeComponent } from '../../pages/admin/add-employee/add-employee.component';
import { EmployeeDisplayComponent } from '../../pages/admin/employee-display/employee-display.component';
import { SkillDisplayComponent } from '../../pages/skillgap/skill-display/skill-display.component';
import { SkillgapDisplayComponent } from '../../pages/skillgap/skillgap-display/skillgap-display.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'employee', component:AddEmployeeComponent  },
  { path: 'employeedisplay',component:EmployeeDisplayComponent},
  { path: 'holiday',},
  { path: 'view-profile'},
  { path: 'timesheet'},
  { path: 'addSkills',component:SkillDisplayComponent},
  {path:'empskillgap',component:SkillgapDisplayComponent}

];
