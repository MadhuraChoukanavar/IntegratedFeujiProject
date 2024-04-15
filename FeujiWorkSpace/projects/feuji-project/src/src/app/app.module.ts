import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { PmoLayoutComponent } from './layouts/pmo-layout/pmo-layout.component';
import { AddEmployeeComponent } from './pages/admin/add-employee/add-employee.component';
import { ViewProfileComponent } from './pages/admin/view-profile/view-profile.component';
import { AddAccountComponent } from './pages/admin/add-account/add-account.component';
import { AccountDisplayComponent } from './pages/admin/account-display/account-display.component';
import { EmployeeDisplayComponent } from './pages/admin/employee-display/employee-display.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';


import { UserService } from '../models/user.service';
import { EmployeeService } from '../models/employee.service';
import { SkillgapDisplayComponent } from './pages/skillgap/skillgap-display/skillgap-display.component';
import { CurrentskillsComponent } from './pages/skillgap/currentskills/currentskills.component';
import { UpdateAccountComponent } from './pages/admin/update-account/update-account.component';
import { HolidayModule } from '../models/holiday.module';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeSidemenuComponent } from './components/employee-sidemenu/employee-sidemenu.component';
import { EmployeeSkillDisplayComponent } from './pages/skillgap/employee-skill-display/employee-skill-display.component';
import { SkillDisplayComponent } from './pages/skillgap/skill-display/skill-display.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeSkillGapComponent } from './pages/skillgap/employee-skill-gap/employee-skill-gap.component';
import { TrainingRecommendationComponent } from './pages/skillgap/training-recommendation/training-recommendation.component';

import { AddMainSkillComponent } from './pages/admin/add-main-skill/add-main-skill.component';
import { AddSkillCategoryComponent } from './pages/admin/add-skill-category/add-skill-category.component';
import { AddSubSkillCategoryComponent } from './pages/admin/add-sub-skill-category/add-sub-skill-category.component';
import { ManagerRecommendedTrainingComponent } from './pages/skillgap/manager-recommended-training/manager-recommended-training.component';









@NgModule({
  declarations: [
  AppComponent,
    NavbarComponent,
    FooterComponent,
    SidemenuComponent,
    AdminLayoutComponent,
    LoginLayoutComponent,
    EmployeeLayoutComponent,
    ManagerLayoutComponent,
    PmoLayoutComponent,
    AddEmployeeComponent,
    ViewProfileComponent,
    AddAccountComponent,
    AccountDisplayComponent,
    EmployeeDisplayComponent,
    SkillDisplayComponent,
    SkillgapDisplayComponent,
    CurrentskillsComponent,
    UpdateAccountComponent,
     EmployeeNavbarComponent,
     EmployeeSidemenuComponent,
     EmployeeSkillDisplayComponent,
     EmployeeSkillGapComponent,
     TrainingRecommendationComponent,
     AddMainSkillComponent,
     AddSkillCategoryComponent,
     AddSubSkillCategoryComponent,
     ManagerRecommendedTrainingComponent

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HolidayModule,
    ReactiveFormsModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatTableModule,
    MatHeaderCell,
    MatRow,
    MatTooltipModule,
    MatRadioModule

  ],
  providers: [UserService,
  EmployeeService,
  provideAnimationsAsync()],
  bootstrap: [AppComponent]


})
export class AppModule { }
