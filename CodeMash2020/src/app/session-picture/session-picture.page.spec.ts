import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionPicturePage } from './session-picture.page';

describe('SessionPicturePage', () => {
  let component: SessionPicturePage;
  let fixture: ComponentFixture<SessionPicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
