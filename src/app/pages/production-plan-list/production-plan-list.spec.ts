import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPlanList } from './production-plan-list';

describe('ProductionPlanList', () => {
  let component: ProductionPlanList;
  let fixture: ComponentFixture<ProductionPlanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionPlanList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductionPlanList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
