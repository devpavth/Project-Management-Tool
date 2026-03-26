import { Component } from '@angular/core';
import { PrimeNGComponents } from '../../../shared/services/prime-components';

@Component({
  selector: 'app-component-list',
  imports: [PrimeNGComponents],
  templateUrl: './component-list.html',
  styleUrl: './component-list.css',
})
export class ComponentList {
  components = [
    {
      componentName: 'Topflange'
    },
    {
      componentName: 'Bottomflange'
    },
    {
      componentName: 'Blade'
    },
    {
      componentName: 'Nacelle'
    },
    {
      componentName: 'Hub'
    },
    {
      componentName: 'Tower'
    },
    {
      componentName: 'Converter Panel'
    },
    {
      componentName: 'Site Accessories'
    },
    {
      componentName: 'SCADA'
    }
  ]
}
