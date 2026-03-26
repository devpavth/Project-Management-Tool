import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerTypeList } from './tower-type-list';

describe('TowerTypeList', () => {
  let component: TowerTypeList;
  let fixture: ComponentFixture<TowerTypeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerTypeList],
    }).compileComponents();

    fixture = TestBed.createComponent(TowerTypeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
