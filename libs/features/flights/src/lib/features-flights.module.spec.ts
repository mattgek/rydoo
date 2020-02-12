import { async, TestBed } from '@angular/core/testing';
import { FeaturesFlightsModule } from './features-flights.module';

describe('FeaturesFlightsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesFlightsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesFlightsModule).toBeDefined();
  });
});
