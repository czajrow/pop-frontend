import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentShelfComponent } from './development-shelf.component';
import { ApplicationComponent } from './components/application/application.component';

@NgModule({
    declarations: [
      DevelopmentShelfComponent,
      ApplicationComponent,
    ],
    exports: [
        DevelopmentShelfComponent
    ],
  imports: [
    CommonModule,
  ]
})
export class DevelopmentShelfModule { }
