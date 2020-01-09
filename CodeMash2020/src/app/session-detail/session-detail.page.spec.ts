import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionDetailPage } from './session-detail.page';

describe('SessionDetailPage', () => {
  let component: SessionDetailPage;
  let fixture: ComponentFixture<SessionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
