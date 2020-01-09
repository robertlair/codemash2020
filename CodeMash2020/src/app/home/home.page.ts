import { Component } from '@angular/core';
import { SessionDataService } from '../services/session-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public sessionData: SessionDataService) { }

}
