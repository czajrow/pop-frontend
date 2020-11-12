import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramComponent } from './diagram.component';
import { SectionModule } from '../../shared/section/section.module';
import { GojsAngularModule } from 'gojs-angular';
import { DiagramEditorComponent } from './components/diagram-editor/diagram-editor.component';


@NgModule({
  declarations: [
    DiagramComponent,
    DiagramEditorComponent,
  ],
  exports: [
    DiagramComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    GojsAngularModule
  ]
})
export class DiagramModule {
}
