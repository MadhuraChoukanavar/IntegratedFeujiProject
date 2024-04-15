import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDisplayComponent } from './skill-display.component';

describe('SkillDisplayComponent', () => {
  let component: SkillDisplayComponent;
  let fixture: ComponentFixture<SkillDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
