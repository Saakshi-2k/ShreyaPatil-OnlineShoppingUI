import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerAddfunctionComponent } from './retailerAddfunction.component';

describe('RetailerAddfunctionComponent', () => {
  let component: RetailerAddfunctionComponent;
  let fixture: ComponentFixture<RetailerAddfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerAddfunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerAddfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
