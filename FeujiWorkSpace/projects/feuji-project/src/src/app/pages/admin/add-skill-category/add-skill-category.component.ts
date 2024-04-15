import { Component, OnInit } from '@angular/core';
import { EmployeeSkillService } from '../../../services/employee-skill.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SkillCategoryBean } from '../../../../models/SkillCategoryBean.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-skill-category',
  templateUrl: './add-skill-category.component.html',
  styleUrls: ['./add-skill-category.component.css']
})
export class AddSkillCategoryComponent implements OnInit {
  newSkillCategoryName: any;
  referenceTypeId: number = 0;
  accordionData: any[] = [];

  constructor(private apiService: EmployeeSkillService,
     public dialogRef: MatDialogRef<AddSkillCategoryComponent>) { }

  ngOnInit(): void {
    this.fetchSkillCategories();
  }

  close(): void {
    this.dialogRef.close();
  }

  fetchSkillCategories(): void {
    this.apiService.getSkillCategoryNames().subscribe((data: any[]) => {
      this.accordionData = data;
    });
  }

  saveSkillCategory(): void {
    this.newSkillCategoryName = this.newSkillCategoryName.replace(/\s+/g, ' ');
    this.newSkillCategoryName = this.newSkillCategoryName.trim();
    if (this.newSkillCategoryName && this.newSkillCategoryName.trim() !== '') {
      const selectedCategory = this.accordionData.find(category => category.referenceTypeId);
      if (selectedCategory) {
        this.referenceTypeId = selectedCategory.referenceTypeId;
      } else {
        return; 
      }
  
      const skillCategoryBean: SkillCategoryBean = new SkillCategoryBean(
        this.newSkillCategoryName,
        { referenceTypeId: this.referenceTypeId, referenceTypeName: this.newSkillCategoryName },
        0,
        'Admin',
        ''
      );
  
  
      this.apiService.saveSkillCategoryAdmin(skillCategoryBean).subscribe(
        response => {
          this.fetchSkillCategories();
          Swal.fire({title: "Skill category saved successfully", icon: "success"});
          this.dialogRef.close();
        },
        error => {
          Swal.fire({title: "Skill Category already Exist", icon: "error"});
          this.dialogRef.close();
        }
      );
    } else {
      console.log('New skill category name is empty or not defined');
    }
  }
  
  }
  

