import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from '@/core/core-routing.module';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RootLayoutComponent, SidebarComponent],
  exports: [
    RootLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
