import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferterComponent } from './offerter.component';

describe('OfferterComponent', () => {
  let component: OfferterComponent;
  let fixture: ComponentFixture<OfferterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
