import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeTypeList } from './blade-type-list';

describe('BladeTypeList', () => {
  let component: BladeTypeList;
  let fixture: ComponentFixture<BladeTypeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BladeTypeList],
    }).compileComponents();

    fixture = TestBed.createComponent(BladeTypeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
