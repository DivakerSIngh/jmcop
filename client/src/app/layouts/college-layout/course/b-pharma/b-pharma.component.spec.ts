import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPharmaComponent } from './b-pharma.component';

describe('BPharmaComponent', () => {
  let component: BPharmaComponent;
  let fixture: ComponentFixture<BPharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
