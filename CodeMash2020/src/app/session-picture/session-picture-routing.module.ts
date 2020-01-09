import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionPicturePage } from './session-picture.page';

const routes: Routes = [
  {
    path: '',
    component: SessionPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionPicturePageRoutingModule {}
