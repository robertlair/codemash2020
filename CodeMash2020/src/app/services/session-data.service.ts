import { Injectable } from '@angular/core';
import { sessions } from '../../assets/data/sessions.json';
import { Session, Category } from '../models/session.js';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  private sessionList: Session[];

  constructor() {
    this.sessionList = sessions;
  }

  public getSesssions() {
    return this.sessionList;
  }

  public getSessionTags(session: Session) {
    const tags: Category[] = session.categories.filter(data => data.name === 'Tags');
    if (tags.length > 0) {
      return tags[0].categoryItems;
    }
  }

  public getSessionType(session: Session) {
    const sessionFormat: Category[] = session.categories.filter(data => data.name === 'Session format');
    if (sessionFormat.length > 0) {
      return sessionFormat[0].categoryItems[0].name.toLowerCase();
    }
  }

  public getSessionDetails(sessionId: string) {
    return this.sessionList.find(s => s.id === sessionId);
  }
}
