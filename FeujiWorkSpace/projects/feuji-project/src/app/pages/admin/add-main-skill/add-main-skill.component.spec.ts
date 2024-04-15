import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { EmployeeSkillService } from '../../../services/employee-skill.service';
import { AddMainSkillComponent } from './add-main-skill.component';

describe('AddMainSkillComponent', () => {
  let component: AddMainSkillComponent;
  let fixture: ComponentFixture<AddMainSkillComponent>;
  let mockEmployeeSkillService: jasmine.SpyObj<EmployeeSkillService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockEmployeeSkillService = jasmine.createSpyObj('EmployeeSkillService', ['getSkillCategories', 'getTechnicalCategory', 'getSkills']);

    await TestBed.configureTestingModule({
      declarations: [AddMainSkillComponent],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: EmployeeSkillService, useValue: mockEmployeeSkillService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMainSkillComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load skill categories on init', () => {
    const mockData = [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }];
    mockEmployeeSkillService.getSkillCategories.and.returnValue(of(mockData));

    fixture.detectChanges();

    expect(component.accordionData).toEqual(mockData);
  });

  it('should select skill category', () => {
    const selectedCategory = 'Category 1';
    const mockSubSkills = [{ id: 1, name: 'Sub Skill 1' }, { id: 2, name: 'Sub Skill 2' }];
    mockEmployeeSkillService.getTechnicalCategory.and.returnValue(of(mockSubSkills));

    component.onSelectSkillCategory(selectedCategory);

    expect(component.selectedSkillCategory).toEqual(selectedCategory);
    expect(component.accordionSubData).toEqual(mockSubSkills);
  });

  it('should select tech category', () => {
    const techCatId = 1;
    const mockSkills = [{ id: 1, name: 'Skill 1' }, { id: 2, name: 'Skill 2' }];
    mockEmployeeSkillService.getSkills.and.returnValue(of(mockSkills));

    component.onSelectTechCat(techCatId);

    expect(component.selectedSubSkillCategory).toEqual(techCatId);
    expect(component.allSkills).toEqual(mockSkills);
    expect(component.size).toEqual(mockSkills.length);
  });

  it('should add new row', () => {
    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
    mockMatDialog.open.and.returnValue(dialogRefSpyObj);

    component.addNewRow();

    expect(mockMatDialog.open).toHaveBeenCalled();
    expect(mockEmployeeSkillService.getSkillCategories).toHaveBeenCalled();
  });

  // Add more test cases for other component methods as needed
});
