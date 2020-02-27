import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListItemsPage } from './list-items.page';

describe('ListItemsPage', () => {
  let component: ListItemsPage;
  let fixture: ComponentFixture<ListItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
