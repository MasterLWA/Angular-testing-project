import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisitingDetailsPageComponent } from './lisiting-details-page.component';

describe('LisitingDetailsPageComponent', () => {
  let component: LisitingDetailsPageComponent;
  let fixture: ComponentFixture<LisitingDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LisitingDetailsPageComponent]
    });
    fixture = TestBed.createComponent(LisitingDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
