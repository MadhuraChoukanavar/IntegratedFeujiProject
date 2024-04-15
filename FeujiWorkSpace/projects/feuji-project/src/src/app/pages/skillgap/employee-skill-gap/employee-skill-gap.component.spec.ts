import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillGapComponent } from './employee-skill-gap.component';

describe('EmployeeSkillGapComponent', () => {
  let component: EmployeeSkillGapComponent;
  let fixture: ComponentFixture<EmployeeSkillGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeSkillGapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSkillGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
