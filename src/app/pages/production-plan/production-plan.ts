import { Component, inject } from '@angular/core';
import { PrimeNGComponents } from '../../shared/services/prime-components';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-production-plan',
  imports: [PrimeNGComponents],
  templateUrl: './production-plan.html',
  styleUrl: './production-plan.css',
})
export class ProductionPlan {
  addWTG: any[] = [];

  private fb = inject(FormBuilder);

  productionPlanForm = this.fb.group({
    wtgList: this.fb.array([this.createWTGGroup()])
  })

  get wtgList(){
    return this.productionPlanForm.get('wtgList') as FormArray;
  }

  createWTGGroup(){
    return this.fb.group({
      towerScope: [true],
      towerType: [''],
      bladeType: [''],
      wtgQty: [null]
    })
  }

  towerTypeList = [
    {
      label: '120HH-474T',
      value: '120HH-474T'
    },
    {
      label: '140HH-520T',
      value: '140HH-520T'
    }
  ]

  bladeTypeList = [
    {
      label: 'Small',
      value: 'Small'
    },
    {
      label: 'Big',
      value: 'Big'
    }
  ]

  addWTGType(){
    this.wtgList.push(this.createWTGGroup());
  }

  check(event: any){
    console.log(event);
  }
}
