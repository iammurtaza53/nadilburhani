import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboradPage } from './dashborad.page';

describe('DashboradPage', () => {
  let component: DashboradPage;
  let fixture: ComponentFixture<DashboradPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboradPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
