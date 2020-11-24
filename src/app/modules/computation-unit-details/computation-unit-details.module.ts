import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationUnitDetailsComponent } from './computation-unit-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComputationUnitDetailsComponent],
  exports: [
    ComputationUnitDetailsComponent,
    ReactiveFormsModule

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ]
})
export class ComputationUnitDetailsModule {
}
