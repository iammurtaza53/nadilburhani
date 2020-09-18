import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorseRidingPage } from './horse-riding.page';

describe('HorseRidingPage', () => {
  let component: HorseRidingPage;
  let fixture: ComponentFixture<HorseRidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseRidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorseRidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
