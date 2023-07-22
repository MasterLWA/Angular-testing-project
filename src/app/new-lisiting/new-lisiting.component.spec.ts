import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLisitingComponent } from './new-lisiting.component';

describe('NewLisitingComponent', () => {
  let component: NewLisitingComponent;
  let fixture: ComponentFixture<NewLisitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLisitingComponent]
    });
    fixture = TestBed.createComponent(NewLisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
