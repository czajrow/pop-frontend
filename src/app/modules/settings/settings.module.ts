import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SectionModule } from '../../shared/section/section.module';
import { GojsAngularModule } from 'gojs-angular';
import { DiagramEditorComponent } from './components/diagram-editor/diagram-editor.component';


@NgModule({
  declarations: [
    SettingsComponent,
    DiagramEditorComponent,
  ],
  exports: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    GojsAngularModule
  ]
})
export class SettingsModule {
}
