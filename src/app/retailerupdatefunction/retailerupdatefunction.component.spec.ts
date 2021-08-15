import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerupdatefunctionComponent } from './retailerupdatefunction.component';

describe('RetailerupdatefunctionComponent', () => {
  let component: RetailerupdatefunctionComponent;
  let fixture: ComponentFixture<RetailerupdatefunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerupdatefunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerupdatefunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
