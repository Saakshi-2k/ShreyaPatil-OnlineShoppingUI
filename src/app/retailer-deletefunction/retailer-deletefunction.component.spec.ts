import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDeletefunctionComponent } from './retailer-deletefunction.component';

describe('RetailerDeletefunctionComponent', () => {
  let component: RetailerDeletefunctionComponent;
  let fixture: ComponentFixture<RetailerDeletefunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerDeletefunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerDeletefunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
