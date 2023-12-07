import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersDetailsComponent } from './avengers-details.component';

describe('AvengersDetailsComponent', () => {
  let component: AvengersDetailsComponent;
  let fixture: ComponentFixture<AvengersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvengersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvengersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
