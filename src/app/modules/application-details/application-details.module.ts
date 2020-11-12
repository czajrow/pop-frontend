import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDetailsComponent } from './application-details.component';



@NgModule({
    declarations: [ApplicationDetailsComponent],
    exports: [
        ApplicationDetailsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ApplicationDetailsModule { }
