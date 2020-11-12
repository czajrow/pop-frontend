import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDetailsPageComponent } from './application-details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsModule } from '../../modules/application-details/application-details.module';

const routes: Routes = [
  {
    path: ':id',
    component: ApplicationDetailsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'development-shelf',
  }
];

@NgModule({
  declarations: [ApplicationDetailsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ApplicationDetailsModule,
  ]
})
export class ApplicationDetailsPageModule { }
