import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRecommendationComponent } from './training-recommendation.component';

describe('TrainingRecommendationComponent', () => {
  let component: TrainingRecommendationComponent;
  let fixture: ComponentFixture<TrainingRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
