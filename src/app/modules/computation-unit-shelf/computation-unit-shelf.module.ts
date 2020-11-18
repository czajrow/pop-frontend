import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationUnitShelfComponent } from './computation-unit-shelf.component';
import { ComputationUnitComponent } from './components/computation-unit/computation-unit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComputationUnitShelfComponent, ComputationUnitComponent],
  exports: [
    ComputationUnitShelfComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComputationUnitShelfModule {
}
