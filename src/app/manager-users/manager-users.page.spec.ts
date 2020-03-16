import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerUsersPage } from './manager-users.page';

describe('ManagerUsersPage', () => {
  let component: ManagerUsersPage;
  let fixture: ComponentFixture<ManagerUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
