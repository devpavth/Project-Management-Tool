import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtgProduction } from './wtg-production';

describe('WtgProduction', () => {
  let component: WtgProduction;
  let fixture: ComponentFixture<WtgProduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WtgProduction],
    }).compileComponents();

    fixture = TestBed.createComponent(WtgProduction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
