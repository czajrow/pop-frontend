import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputationUnitShelfComponent } from './computation-unit-shelf.component';
import { ComputationUnitComponent } from './components/computation-unit/computation-unit.component';



@NgModule({
    declarations: [ComputationUnitShelfComponent, ComputationUnitComponent],
    exports: [
        ComputationUnitShelfComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComputationUnitShelfModule { }
