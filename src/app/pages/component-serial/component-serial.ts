import { Component, OnInit } from '@angular/core';
import { PrimeNGComponents } from '../../shared/services/prime-components';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-component-serial',
  imports: [PrimeNGComponents],
  templateUrl: './component-serial.html',
  styleUrl: './component-serial.css',
})
export class ComponentSerial implements OnInit {
  showPlanDetailsModal = false;

  items: MenuItem[] = [];
  actionItems: MenuItem[] = [];

  statuses!: any[];
  plantNameList: any[] = [];
  
  constructor(private sanitizer: DomSanitizer){}
  
  ngOnInit(): void {
    this.items = this.getMenuItems();
    this.actionItems = this.getActionItems();

    this.statuses = [
      { label: 'Created', value: 'Created' },
      { label: 'Allocated', value: 'Allocated' },
      { label: 'Ready', value: 'Ready' },
      { label: 'Assigned', value: 'Assigned' }
    ];

    this.plantNameList = [
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Trichy', value: 'Trichy' }
    ];
  }

  componentSerialList = [
    {
      slNo: 1,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 2,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 3,
      componentName: 'Blade',
      serialNumber: 'B-001',
      status: 'Assigned',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-01',
      planFinish: '2026-03-02'
    },
    {
      slNo: 4,
      componentName: 'Blade',
      serialNumber: 'B-002',
      status: 'Assigned',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-01',
      planFinish: '2026-03-02'
    },
    {
      slNo: 5,
      componentName: 'Blade',
      serialNumber: 'B-003',
      status: 'Assigned',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-01',
      planFinish: '2026-03-02'
    },
    {
      slNo: 6,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 7,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 8,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 9,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 10,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 11,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 12,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 13,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 14,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 15,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 16,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 17,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 18,
      componentName: 'Blade',
      serialNumber: 'B-004',
      status: 'Assigned',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-03',
      planFinish: '2026-03-04'
    },
    {
      slNo: 19,
      componentName: 'Blade',
      serialNumber: 'B-005',
      status: 'Assigned',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-03',
      planFinish: '2026-03-04'
    },
    {
      slNo: 20,
      componentName: 'Blade',
      serialNumber: 'B-006',
      status: 'Ready',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-03',
      planFinish: '2026-03-04'
    },
    {
      slNo: 21,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 22,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 23,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 24,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 25,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 26,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 27,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 28,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 29,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 30,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 16,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 17,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 18,
      componentName: 'Blade',
      serialNumber: 'B-007',
      status: 'Ready',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-05',
      planFinish: '2026-03-06'
    },
    {
      slNo: 19,
      componentName: 'Blade',
      serialNumber: 'B-008',
      status: 'Ready',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-05',
      planFinish: '2026-03-06'
    },
    {
      slNo: 20,
      componentName: 'Blade',
      serialNumber: 'B-009',
      status: 'Ready',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-05',
      planFinish: '2026-03-06'
    },
    {
      slNo: 21,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 22,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 23,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 24,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 25,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 16,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 17,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 18,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-07',
      planFinish: '2026-03-08'
    },
    {
      slNo: 19,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-07',
      planFinish: '2026-03-08'
    },
    {
      slNo: 20,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Chennai',
      productionManager: 'PM-1',
      planStart: '2026-03-07',
      planFinish: '2026-03-08'
    },
    {
      slNo: 21,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 22,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 23,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 24,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 25,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 16,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 17,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 18,
      componentName: 'Blade',
      serialNumber: 'B-013',
      status: 'Assigned',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-01',
      planFinish: '2026-03-02'
    },
    {
      slNo: 19,
      componentName: 'Blade',
      serialNumber: 'B-014',
      status: 'Assigned',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-01',
      planFinish: '2026-03-02'
    },
    {
      slNo: 20,
      componentName: 'Blade',
      serialNumber: 'B-015',
      status: 'Assigned',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-01',
      planFinish: '2026-03-02'
    },
    {
      slNo: 21,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 22,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 23,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 24,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 25,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 16,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 17,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 18,
      componentName: 'Blade',
      serialNumber: 'B-016',
      status: 'Ready',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-03',
      planFinish: '2026-03-04'
    },
    {
      slNo: 19,
      componentName: 'Blade',
      serialNumber: 'B-017',
      status: 'Ready',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-03',
      planFinish: '2026-03-04'
    },
    {
      slNo: 20,
      componentName: 'Blade',
      serialNumber: 'B-018',
      status: 'Ready',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-03',
      planFinish: '2026-03-04'
    },
    {
      slNo: 21,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 22,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 23,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 24,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 25,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 16,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 17,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 18,
      componentName: 'Blade',
      serialNumber: 'B-019',
      status: 'Ready',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-05',
      planFinish: '2026-03-06'
    },
    {
      slNo: 19,
      componentName: 'Blade',
      serialNumber: 'B-020',
      status: 'Ready',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '2026-03-05',
      planFinish: '2026-03-06'
    },
    {
      slNo: 20,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 21,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 22,
      componentName: 'Hub',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 23,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 24,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 25,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 26,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 27,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 28,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 29,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 30,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 31,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 32,
      componentName: 'Hub',
    serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 33,
      componentName: 'Tower',
     serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 34,
      componentName: 'Tower',
      seriaserialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 35,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 36,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 37,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 38,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 39,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 40,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 41,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 26,
      componentName: 'Topflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 27,
      componentName: 'Bottomflange',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 28,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 29,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 30,
      componentName: 'Blade',
      serialNumber: '-',
      status: 'Allocated',
      plantName: 'Trichy',
      productionManager: 'PM-2',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 31,
      componentName: 'Nacelle',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 32,
      componentName: 'Hub',
    serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 33,
      componentName: 'Tower',
     serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 34,
      componentName: 'Tower',
      seriaserialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 35,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 36,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 37,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 38,
      componentName: 'Tower',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 39,
      componentName: 'Converter Panel',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 40,
      componentName: 'Site Accessories',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
    {
      slNo: 41,
      componentName: 'SCADA',
      serialNumber: '-',
      status: 'Created',
      plantName: '-',
      productionManager: '-',
      planStart: '-',
      planFinish: '-'
    },
  ];

  getMenuItems(){
    return [
      {
        label: 'View',
        svgIcon: `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 0 0 0-.8M12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
          </svg>
        `,
        command: () => this.openPlanDetails()
      }
    ]
  }

  getActionItems(){
    return [
      {
        label: 'Plant Allocation'
      }
    ]
  }

  openPlanDetails(){
    try {
      this.showPlanDetailsModal = true;
    } catch (error) {
      console.log(error);
    }
  }

  getSafeSvg(svg: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getSeverity(status: string) {
    switch (status) {
        case 'Created':
            return 'info';
    
        case 'Allocated':
            return 'success';
    
        case 'Ready':
            return 'warn';
    
        case 'Assigned':
            return 'success';

        default:
          return null;
    }
  }
}
