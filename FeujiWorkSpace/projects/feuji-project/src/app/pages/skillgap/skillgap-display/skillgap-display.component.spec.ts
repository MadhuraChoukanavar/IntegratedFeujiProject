import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillgapDisplayComponent } from './skillgap-display.component';

describe('SkillgapDisplayComponent', () => {
  let component: SkillgapDisplayComponent;
  let fixture: ComponentFixture<SkillgapDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillgapDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillgapDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
