import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComputationUnitShelfPageComponent } from './computation-unit-shelf-page.component';
import { ComputationUnitShelfModule } from "../../modules/computation-unit-shelf/computation-unit-shelf.module";

const routes: Routes = [
  {
    path: '',
    component: ComputationUnitShelfPageComponent,
  }
];


@NgModule({
  declarations: [ComputationUnitShelfPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComputationUnitShelfModule,
  ]
})
export class ComputationUnitShelfPageModule { }
