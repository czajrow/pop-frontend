import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SettingsModule} from '../../modules/settings/settings.module';
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
    SettingsModule,
  ]
})
export class DiagramPageModule { }
