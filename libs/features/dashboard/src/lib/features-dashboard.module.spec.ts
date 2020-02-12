import { async, TestBed } from '@angular/core/testing';
import { FeaturesDashboardModule } from './features-dashboard.module';

describe('FeaturesDashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesDashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesDashboardModule).toBeDefined();
  });
});
