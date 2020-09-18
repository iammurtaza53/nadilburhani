import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CricketPage } from './cricket.page';

describe('CricketPage', () => {
  let component: CricketPage;
  let fixture: ComponentFixture<CricketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CricketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
