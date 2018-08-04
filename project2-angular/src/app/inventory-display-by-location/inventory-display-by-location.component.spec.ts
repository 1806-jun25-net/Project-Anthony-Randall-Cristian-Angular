import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDisplayByLocationComponent } from './inventory-display-by-location.component';

describe('InventoryDisplayByLocationComponent', () => {
  let component: InventoryDisplayByLocationComponent;
  let fixture: ComponentFixture<InventoryDisplayByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDisplayByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDisplayByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
