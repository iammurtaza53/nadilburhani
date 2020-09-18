import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootballPage } from './football.page';

describe('FootballPage', () => {
  let component: FootballPage;
  let fixture: ComponentFixture<FootballPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
