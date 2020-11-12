import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@/pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'diagram',
    loadChildren: () => import('@/pages/diagram-page/diagram-page.module').then(m => m.DiagramPageModule),
  },
  {
    path: 'computation-unit-shelf',
    loadChildren: () => import('@/pages/computation-unit-shelf-page/computation-unit-shelf-page.module').then(m => m.ComputationUnitShelfPageModule),
  },
  {
    path: 'development-shelf',
    loadChildren: () => import('@/pages/development-shelf-page/development-shelf-page.module').then(m => m.DevelopmentShelfPageModule),
  },
  {
    path: 'application-details',
    loadChildren: () => import('@/pages/application-details-page/application-details-page.module').then(m => m.ApplicationDetailsPageModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
