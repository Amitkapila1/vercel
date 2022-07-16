import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md'
import { NgxEchartsModule } from 'ngx-echarts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import {MatCardModule} from '@angular/material/card';

const routes : Routes = [
  { path: '', component: SidebarComponent },
  { path: '', component: NavbarComponent }
]

@NgModule({
  declarations: [SidebarComponent,NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    MatSidenavModule,
    CommonModule,
    NavbarModule,
    ButtonsModule,
    NgbModule,
    TabViewModule,
    MDBBootstrapModule,
    NgChartsModule,
    HttpClientModule,
    ChartModule,
    ButtonModule,
    MatCardModule,
    CardModule,
    //Sidebar1Module,
    MatButtonModule,
   // OwlClockModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
  exports:[SidebarComponent,NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[]
  
})
export class SharedModule { }