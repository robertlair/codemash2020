import { Component, OnInit } from '@angular/core';

import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
const { Camera } = Plugins;

@Component({
  selector: 'app-session-picture',
  templateUrl: './session-picture.page.html',
  styleUrls: ['./session-picture.page.scss'],
})
export class SessionPicturePage implements OnInit {

  image: SafeResourceUrl;
  imageTaken = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePhoto() {
    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });
    this.image = this.sanitizer.bypassSecurityTrustUrl(result.webPath);
    this.imageTaken = true;
  }

}
