import { async, TestBed } from '@angular/core/testing';
import { FeaturesPaymentMethodsModule } from './features-payment-methods.module';

describe('FeaturesPaymentMethodsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesPaymentMethodsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesPaymentMethodsModule).toBeDefined();
  });
});
