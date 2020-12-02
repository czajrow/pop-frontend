import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationClusterShelfPageComponent } from './computation-cluster-shelf-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ComputationClusterShelfModule } from "../../modules/computation-cluster-shelf/computation-cluster-shelf.module";

const routes: Routes = [
  {
    path: '',
    component: ComputationClusterShelfPageComponent,
  }
];


@NgModule({
  declarations: [ComputationClusterShelfPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComputationClusterShelfModule,
  ]
})
export class ComputationClusterShelfPageModule { }
