import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeLayoutComponent } from './college-layout.component';

describe('CollegeLayoutComponent', () => {
  let component: CollegeLayoutComponent;
  let fixture: ComponentFixture<CollegeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
