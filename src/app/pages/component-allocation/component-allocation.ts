import { Component } from '@angular/core';
import { PrimeNGComponents } from '../../shared/services/prime-components';

@Component({
  selector: 'app-component-allocation',
  imports: [PrimeNGComponents],
  templateUrl: './component-allocation.html',
  styleUrl: './component-allocation.css',
})
export class ComponentAllocation {
  componentAllocationList = [
  {
    slNo: 1,
    component: 'Blade',
    plantName: 'Plant A',
    plantManager: 'Ravi Kumar',
    projectCode: 'P-8001',
    allocatedQuantity: 25
  },
  {
    slNo: 2,
    component: 'Nacelle',
    plantName: 'Plant B',
    plantManager: 'Suresh Reddy',
    projectCode: 'P-8002',
    allocatedQuantity: 15
  },
  {
    slNo: 3,
    component: 'Hub',
    plantName: 'Plant C',
    plantManager: 'Manjunath H',
    projectCode: 'P-8003',
    allocatedQuantity: 10
  },
  {
    slNo: 4,
    component: 'Tower',
    plantName: 'Plant D',
    plantManager: 'Lakshmi Devi',
    projectCode: 'P-8004',
    allocatedQuantity: 30
  },
  {
    slNo: 5,
    component: 'Converter Panel',
    plantName: 'Plant E',
    plantManager: 'Arjun Naik',
    projectCode: 'P-8005',
    allocatedQuantity: 20
  }
];
}
