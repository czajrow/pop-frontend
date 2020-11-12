import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DiagramModule} from '../../modules/diagram/diagram.module';
import { DiagramPageComponent } from './diagram-page.component';

const routes: Routes = [
  {
    path: '',
    component: DiagramPageComponent,
  }
];

@NgModule({
  declarations: [
    DiagramPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DiagramModule,
  ]
})
export class DiagramPageModule { }
