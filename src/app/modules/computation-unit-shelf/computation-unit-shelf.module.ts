import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationUnitShelfComponent } from './computation-unit-shelf.component';



@NgModule({
    declarations: [ComputationUnitShelfComponent],
    exports: [
        ComputationUnitShelfComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComputationUnitShelfModule { }
