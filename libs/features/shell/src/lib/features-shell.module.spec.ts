import { async, TestBed } from '@angular/core/testing';
import { FeaturesShellModule } from './features-shell.module';

describe('FeaturesShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesShellModule).toBeDefined();
  });
});
