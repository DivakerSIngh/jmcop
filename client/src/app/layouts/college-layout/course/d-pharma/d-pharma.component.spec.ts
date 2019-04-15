import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPharmaComponent } from './d-pharma.component';

describe('DPharmaComponent', () => {
  let component: DPharmaComponent;
  let fixture: ComponentFixture<DPharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
