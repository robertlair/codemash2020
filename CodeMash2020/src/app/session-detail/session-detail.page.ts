import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionDataService } from '../services/session-data.service';
import { Session } from '../models/session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {

public sessionId: string;
public session: Session;

  constructor(private route: ActivatedRoute, public sessionData: SessionDataService) { }

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('id');
    this.session = this.sessionData.getSessionDetails(this.sessionId);
  }

}
