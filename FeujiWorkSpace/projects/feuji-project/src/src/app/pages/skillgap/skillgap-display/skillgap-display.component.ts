import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeSkillService } from '../../../services/employee-skill.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeesSkillsListDto } from '../../../../models/EmployeesSkillsListDto.model';
import { SkillsBean } from '../../../../models/SkillsBean.model';
import { SkillNamesDto } from '../../../../models/SkillNamesDto.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-skillgap-display',
  templateUrl: './skillgap-display.component.html',
  styleUrl: './skillgap-display.component.css'
})
export class SkillgapDisplayComponent implements OnInit {

  empSkills: EmployeesSkillsListDto[] = [];
  skillNames: SkillNamesDto[] = [];
  skillCatogoryInput: string = 'Skill Category';
  skillCategories: any[] = [];
  selectedSkillCate: string = '';
  selectedTechnicalCate: string='';
  selectedDesgn: string = '';
  selectedRoleName: string='';
  isBorderBlue: boolean = false;
  isBorderBlue2: boolean = false;
  isBorderBlue3: boolean = false;

  empValues: EmployeesSkillsListDto[] = [];
  technicalCategories: any[] = [];
  empName: string = "";
  public page: number = 0;
  public size: number = 5;
  public totalPages: number = 0;
  public totalRecords: number = 0;
  public first: boolean = true;
  public last: boolean = false;

  uniqueRoles: { [key: string]: number[] } = {};
  uniqueRoleNames: string[] = [];
  skillIds: number[] = [];

  constructor(private http: HttpClient, private empskillService: EmployeeSkillService) { }

  /**
   *  Fetches skill categories from the backend
   *  Displays an error message if fetching fails
   */
  ngOnInit(): void {
    this.empskillService.getSkillCategories(this.skillCatogoryInput).subscribe(
      (resp) => {
        this.skillCategories = resp;
      },
      (error) => {
        Swal.fire({
          title: ' Failed to Fetch!',
          text: 'failed to fetch skill categories',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }

  /**
   * Change the border style to blue
   */
  changeBorderStyle() {
    this.isBorderBlue = true;
  }
  /**
   * Change the border style to blue
   */
  changeBorderStyle2() {
    this.isBorderBlue2 = true;
  }
  /**
   * Change the border style to blue
   */
  changeBorderStyle3() {
    this.isBorderBlue3 = true;
  }

  /**
   * Update the selected skill category
   * Fetch technical categories based on the selected skill category
   * Display an error message if fetching fails
   */
  onSelectskillCat(skillcat: any) {

    this.selectedSkillCate = skillcat.target.value;
    this.empskillService.getTechnicalCategory(this.selectedSkillCate).subscribe(
      (resp) => {
        this.technicalCategories = resp;
      },
      (error) => {
        Swal.fire({
          title: ' Failed to Fetch!',
          text: 'failed to fetch technical categories',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );

  }

  /**
   * Extract values from the selected technical category
   *  Extract selected value and initialize variables
   *  Fetch roles based on the selected value
   *  Organize roles into unique groups and update uniqueRoleNames
   *  Display an error message if fetching fails
 */
  onSelectTechCat(techCat: any) {

    const values = techCat.target.value.split(',');
    this.selectedTechnicalCate = values[1];

    const val = values[0];
    this.uniqueRoles = {} as { [key: string]: any[] };
    this.empskillService.getRoles(val)
      .subscribe((res2) => {
        res2.forEach((skillComp: any) => {
          const { roleName, skillId } = skillComp;

          if (this.uniqueRoles.hasOwnProperty(roleName)) {
            this.uniqueRoles[roleName].push(skillId);
          } else {
            this.uniqueRoles[roleName] = [skillId];
          }
        });

        this.uniqueRoleNames = Object.keys(this.uniqueRoles);
      }, (error) => {
        Swal.fire({
          title: ' Failed to Fetch!',
          text: 'failed to fetch employee roles',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }

      );
  }

  /**
   * Update the selected role name
   *  Check if the selected role name exists in uniqueRoles
   *  If it exists, update skillIds with the corresponding skill IDs
   *  If not, display an error message
   */
  onSelectRole(role: any) {
    this.selectedRoleName = role.target.value;
    if (this.uniqueRoles.hasOwnProperty(this.selectedRoleName)) {
      this.skillIds = this.uniqueRoles[this.selectedRoleName];
    } else {
      (error: string) => {
        Swal.fire({
          title: ' Failed to Fetch!',
          text: 'failed to fetch Employee Role',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    }
  }

  /**
   *  Increment the page number
   * Trigger the search function
   */
  onNext() {
    this.page = this.page + 1;
    this.onsearch();
  }

  /**
   * Decrement the page number
   * Trigger the search function
   */
  onPrevious() {
    this.page = this.page - 1;
    this.onsearch();
  }

  /**
   * Set the page number to the last page
   * Trigger the search function
   */
  onLast() {
    this.page = this.totalPages - 1;
    this.onsearch();
  }

  /**
   * Set the page number to the first page
   * Trigger the search function
   */
  onFirst() {
    this.page = 0;
    this.onsearch();
  }

  /**
   * Update the page size
   *  Reset the page number to the first page
   *  Trigger the search function
   */
  onSelectPageSize(size: any) {
    this.size = size.target.value;
    this.page = 0;
    this.onsearch();
  }
  
  /**
   * Fetch employee skills by skill ID, page number, and page size
    * Update pagination information and employee skills data
    * Fetch skill names associated with the skill IDs
    * Display error message if fetching skill names fai
   */
  onsearch() {
    this.empskillService.getEmployeSkillsBySkillId(this.skillIds, this.page, this.size)
      .pipe(
        switchMap((res) => {
          this.first = res.first;
          this.last = res.last;
          this.totalRecords = res.totalRecords;
          this.empSkills = res.skillList;
          this.totalPages = res.totalPages;
          this.empSkills.map(e => e);
          return of(null);
        }
        )
      )
      .subscribe();

    this.empskillService.getSkillNames(this.skillIds).
      subscribe((resp) => {
        this.skillNames = resp;
      },
        (error) => {
          Swal.fire({
            title: ' Failed to Fetch!',
            text: 'failed to fetch Skill names',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        })
  }

  /**
   * Check if the provided skill name matches the skill's name
   * Determine the background color based on the competency level ID
   * Return the corresponding image path 
   */
  getBackgroundColor1(skillName: String, skill: any, competencyLevelId: number): string {
    if (skillName === skill.skillName) {
      if (competencyLevelId === 0) {
        return '../assets/img/noGap.png';
      } else if (competencyLevelId === 3) {
        return '../assets/img/noskill.png';
      } else if (competencyLevelId < 0) {
        return '../assets/img/expert.png';
      }
      else if (competencyLevelId === 1) {
        return '../assets/img/lowgap.png';
      } else {
        return '../assets/img/lessSkill.png';
      }
    } else {
      return '../assets/img/lessSkill.png';
    }
  }

  /**
   *  Determine the competency text based on the competency level ID
   *  Return a string containing expected competency, actual competency, and gap  
   */
  getCompetencyText(skillBean: SkillsBean): string {
    switch (skillBean.competencyLevelId) {
      case 0:
        return 'Expected: ' + skillBean.expectedCompetency + '\nActual: ' + skillBean.actualCompetency + '\nGap: ' + 'No Gap';
      case 1:
        return 'Expected: ' + skillBean.expectedCompetency + '\nActual: ' + skillBean.actualCompetency + '\nGap: ' + 'Less Gap';
      case 3:
        return 'Expected: ' + skillBean.expectedCompetency + '\nActual: ' + skillBean.actualCompetency + '\nGap: ' + 'No Skill';
      default:
        return skillBean.competencyLevelId < 0 ? 'Expected: ' + skillBean.expectedCompetency + '\nActual: ' + skillBean.actualCompetency + '\nGap: More Than Expected'
          : 'Expected: ' + skillBean.expectedCompetency + '\nActual: ' + skillBean.actualCompetency + '\nGap: More Gap';
    }
  }
}
