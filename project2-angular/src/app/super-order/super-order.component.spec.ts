import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperOrderComponent } from './super-order.component';

describe('SuperOrderComponent', () => {
  let component: SuperOrderComponent;
  let fixture: ComponentFixture<SuperOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
