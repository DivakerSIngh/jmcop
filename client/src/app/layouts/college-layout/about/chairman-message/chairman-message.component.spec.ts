import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanMessageComponent } from './chairman-message.component';

describe('ChairmanMessageComponent', () => {
  let component: ChairmanMessageComponent;
  let fixture: ComponentFixture<ChairmanMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairmanMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmanMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
