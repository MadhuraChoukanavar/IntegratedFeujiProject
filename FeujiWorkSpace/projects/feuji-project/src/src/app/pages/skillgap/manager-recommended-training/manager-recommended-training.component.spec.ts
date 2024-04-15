import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRecommendedTrainingComponent } from './manager-recommended-training.component';

describe('ManagerRecommendedTrainingComponent', () => {
  let component: ManagerRecommendedTrainingComponent;
  let fixture: ComponentFixture<ManagerRecommendedTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerRecommendedTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerRecommendedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
