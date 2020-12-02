import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationClusterShelfComponent } from './computation-cluster-shelf.component';
import { ApplicationComponent } from './components/application/application.component';

@NgModule({
    declarations: [
      ComputationClusterShelfComponent,
      ApplicationComponent,
    ],
    exports: [
        ComputationClusterShelfComponent
    ],
  imports: [
    CommonModule,
  ]
})
export class ComputationClusterShelfModule { }
