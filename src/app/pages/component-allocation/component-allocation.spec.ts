import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAllocation } from './component-allocation';

describe('ComponentAllocation', () => {
  let component: ComponentAllocation;
  let fixture: ComponentFixture<ComponentAllocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAllocation],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentAllocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
