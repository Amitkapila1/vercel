import { BrowserModule,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule, } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { GestureConfig } from 'owl-ng';
import { OwlClockModule } from 'owl-ng';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md'
import { NgApexchartsModule } from "ng-apexcharts";
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    ChartsModule
    
  ],
  imports: [
    
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    SidebarModule,
    ButtonModule,
    
    ChartModule,
    OwlClockModule,
    //OwlGalleriaModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
    MDBBootstrapModule.forRoot(),
    NgApexchartsModule,
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    CardModule,
    SidebarModule,
    AppRoutingModule,
    MatSidenavModule,
    ButtonsModule,
    NgbModule,
    //NgxEchartsModule.forRoot({  echarts: () => import('echarts')}),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AutocompleteLibModule,
    MatButtonToggleModule,
    MatTabsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //       enabled: environment.production,
            
    //         // Register the ServiceWorker as soon as the app is stable
    //         // or after 30 seconds (whichever comes first).
    //         registrationStrategy: 'registerWhenStable:30000'
    //       }),
   
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }, { provide: Window, useValue: window }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
