import { async, TestBed } from '@angular/core/testing';
import { SharedAppCoreModule } from './shared-app-core.module';

describe('SharedAppCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAppCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAppCoreModule).toBeDefined();
  });
});
