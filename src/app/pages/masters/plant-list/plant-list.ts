import { Component, OnInit } from '@angular/core';
import { PrimeNGComponents } from '../../../shared/services/prime-components';
import { MenuItem } from 'primeng/api';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-plant-list',
  imports: [PrimeNGComponents],
  templateUrl: './plant-list.html',
  styleUrl: './plant-list.css',
})
export class PlantList implements OnInit {
  constructor(private sanitizer: DomSanitizer){}
  items: MenuItem[] = [];

  plants = [
    {
      plantName: 'Plant A',
      location: 'Chennai'
    },
    {
      plantName: 'Plant B',
      location: 'Pune'
    },
    {
      plantName: 'Plant C',
      location: 'Trichy'
    },
    {
      plantName: 'Warehouse',
      location: 'Tuticorin'
    },
  ]

  ngOnInit(): void {
    this.items = this.getMenuItems();
  }

  getMenuItems(){
    return [
      {
        label: 'Assign Components',
        svgIcon: `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" d="m14.72 8.79l-4.29 4.3l-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 .71.29a1 1 0 0 0 .7-.29l5-5a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8" />
          </svg>
        `
      }
    ]
  }

  getSafeSvg(svg: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
