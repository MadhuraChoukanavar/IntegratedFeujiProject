import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillDisplayComponent } from './pages/skillgap/skill-display/skill-display.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { PmoLayoutComponent } from './layouts/pmo-layout/pmo-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillgapDisplayComponent } from './pages/skillgap/skillgap-display/skillgap-display.component';
import { CurrentskillsComponent } from './pages/skillgap/currentskills/currentskills.component';
import { AccountDisplayComponent } from './pages/admin/account-display/account-display.component';
import { AddAccountComponent } from './pages/admin/add-account/add-account.component';
import { UpdateAccountComponent } from './pages/admin/update-account/update-account.component';

import { EmployeeDisplayComponent } from './pages/admin/employee-display/employee-display.component';
import { EmployeeSkillDisplayComponent } from './pages/skillgap/employee-skill-display/employee-skill-display.component';
import { EmployeeSkillGapComponent } from './pages/skillgap/employee-skill-gap/employee-skill-gap.component';
import { TrainingRecommendationComponent } from './pages/skillgap/training-recommendation/training-recommendation.component';
import { AddMainSkillComponent } from './pages/admin/add-main-skill/add-main-skill.component';
import { ManagerRecommendedTrainingComponent } from './pages/skillgap/manager-recommended-training/manager-recommended-training.component';
import { AdminDashboardComponent } from './pages/skillgap/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './pages/skillgap/employee-dashboard/employee-dashboard/dashboard.component';
import { ManagerdashboardComponent } from './pages/skillgap/managerdashboard/managerdashboard/managerdashboard.component';




const Routes: Routes = [
  { path:"",component:LoginLayoutComponent},
  { path:"login",component:LoginLayoutComponent},
  { path:'admin', component: AdminLayoutComponent,
    children:[
    // {path:"empskillgap",component:SkillgapDisplayComponent},
    { path:"admindashboard",component:AdminDashboardComponent},
    { path:"addSkills",component:AddMainSkillComponent}
  ]
  },

  { path:'employee', component: EmployeeLayoutComponent,
  children:[
    {path:"showEmpSkills",component:EmployeeSkillDisplayComponent},
    {path:"employeeGap",component:EmployeeSkillGapComponent}, 
    {path:"training",component:TrainingRecommendationComponent},
    {path:"dashboard",component:DashboardComponent}

  ]

},
{ path:'manager',component:ManagerLayoutComponent,
  children:[
    {path:"managerdashboard",component:ManagerdashboardComponent},
    {path:'empskillgap',component:SkillgapDisplayComponent},
    { path:"trainingsrecommended",component:ManagerRecommendedTrainingComponent},
  ]
},
  { path:"pmo",component:PmoLayoutComponent},
  { path:"showSkills",component:SkillDisplayComponent},
 
   {path:"accountdisplay",component:AccountDisplayComponent},
  {path:"updateaccount/:id",component:UpdateAccountComponent},
  {path:"addaccount",component:AddAccountComponent},
  

  {path:"showSkillGap",component:SkillgapDisplayComponent},
  {path:"showTechnicalCategory",component:SkillgapDisplayComponent},
  {path:"showTechnicalCategory/currentSkill",component:CurrentskillsComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
