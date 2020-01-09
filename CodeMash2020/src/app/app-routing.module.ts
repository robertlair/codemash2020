import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'session-detail',
    loadChildren: () => import('./session-detail/session-detail.module').then( m => m.SessionDetailPageModule)
  },
  {
    path: 'session-picture',
    loadChildren: () => import('./session-picture/session-picture.module').then( m => m.SessionPicturePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
