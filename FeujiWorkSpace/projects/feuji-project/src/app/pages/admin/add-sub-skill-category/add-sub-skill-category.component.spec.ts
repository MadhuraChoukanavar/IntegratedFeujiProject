import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubSkillCategoryComponent } from './add-sub-skill-category.component';

describe('AddSubSkillCategoryComponent', () => {
  let component: AddSubSkillCategoryComponent;
  let fixture: ComponentFixture<AddSubSkillCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSubSkillCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSubSkillCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
