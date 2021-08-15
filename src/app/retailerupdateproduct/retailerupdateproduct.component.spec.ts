import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerupdateproductComponent } from './retailerupdateproduct.component';

describe('RetailerupdateproductComponent', () => {
  let component: RetailerupdateproductComponent;
  let fixture: ComponentFixture<RetailerupdateproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerupdateproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
