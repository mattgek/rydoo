import { async, TestBed } from '@angular/core/testing';
import { UiCompassModule } from './ui-compass.module';

describe('UiCompassModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCompassModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCompassModule).toBeDefined();
  });
});
