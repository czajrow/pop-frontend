import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationUnitDetailsComponent } from './computation-unit-details.component';



@NgModule({
    declarations: [ComputationUnitDetailsComponent],
    exports: [
        ComputationUnitDetailsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComputationUnitDetailsModule { }
