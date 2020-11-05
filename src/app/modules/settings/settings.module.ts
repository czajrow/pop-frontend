import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {SectionModule} from '../../shared/section/section.module';
import { DiagramComponent } from './components/diagram/diagram.component';



@NgModule({
    declarations: [SettingsComponent, DiagramComponent],
    exports: [
        SettingsComponent
    ],
    imports: [
        CommonModule,
        SectionModule
    ]
})
export class SettingsModule { }
