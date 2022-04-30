import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component'
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { TabViewModule } from "primeng/tabview";
import { ChartModule } from 'primeng/chart';


  const routes: Routes = [
    { path: '', component: DashboardComponent },
  ];
  
  


  @NgModule({
    declarations: [DashboardComponent],
    imports: [
      CommonModule,
      TabViewModule,
      ChartModule,
      MatCardModule,
      NgChartsModule,
      NgbModule,
      RouterModule.forChild(routes),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[]
  
  })
  export class DashboardModule { }