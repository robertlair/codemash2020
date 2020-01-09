import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionPicturePageRoutingModule } from './session-picture-routing.module';

import { SessionPicturePage } from './session-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionPicturePageRoutingModule
  ],
  declarations: [SessionPicturePage]
})
export class SessionPicturePageModule {}
