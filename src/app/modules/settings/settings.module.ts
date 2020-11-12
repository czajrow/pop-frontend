import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {SectionModule} from '../../shared/section/section.module';
import { DiagramBuilderComponent } from './components/diagram/diagram.component';
import { GojsAngularModule } from 'gojs-angular';



@NgModule({
    declarations: [SettingsComponent, DiagramBuilderComponent],
    exports: [
        SettingsComponent
    ],
    imports: [
        CommonModule,
        SectionModule,
        GojsAngularModule
    ]
})
export class SettingsModule { }
