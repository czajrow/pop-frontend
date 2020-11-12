import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentShelfComponent } from './development-shelf.component';



@NgModule({
    declarations: [DevelopmentShelfComponent],
    exports: [
        DevelopmentShelfComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DevelopmentShelfModule { }
