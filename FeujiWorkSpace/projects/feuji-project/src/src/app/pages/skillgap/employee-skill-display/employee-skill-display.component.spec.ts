import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillDisplayComponent } from './employee-skill-display.component';

describe('EmployeeSkillDisplayComponent', () => {
  let component: EmployeeSkillDisplayComponent;
  let fixture: ComponentFixture<EmployeeSkillDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeSkillDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSkillDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
