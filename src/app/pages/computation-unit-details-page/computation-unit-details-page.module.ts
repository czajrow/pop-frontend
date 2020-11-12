import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationUnitDetailsPageComponent } from './computation-unit-details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ComputationUnitDetailsModule } from "../../modules/computation-unit-details/computation-unit-details.module";

const routes: Routes = [
  {
    path: ':id',
    component: ComputationUnitDetailsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'computation-unit-shelf',
  }
];

@NgModule({
  declarations: [ComputationUnitDetailsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComputationUnitDetailsModule,
  ]
})
export class ComputationUnitDetailsPageModule { }
