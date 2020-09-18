import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArcheryPage } from './archery.page';

describe('ArcheryPage', () => {
  let component: ArcheryPage;
  let fixture: ComponentFixture<ArcheryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcheryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcheryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
