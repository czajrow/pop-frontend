import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentShelfPageComponent } from './development-shelf-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentShelfModule } from "../../modules/development-shelf/development-shelf.module";

const routes: Routes = [
  {
    path: '',
    component: DevelopmentShelfPageComponent,
  }
];


@NgModule({
  declarations: [DevelopmentShelfPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DevelopmentShelfModule,
  ]
})
export class DevelopmentShelfPageModule { }
