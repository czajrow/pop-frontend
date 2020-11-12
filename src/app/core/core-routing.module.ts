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
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
