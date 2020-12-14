import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDetailsComponent } from './application-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [ApplicationDetailsComponent],
    exports: [
        ApplicationDetailsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ApplicationDetailsModule { }
