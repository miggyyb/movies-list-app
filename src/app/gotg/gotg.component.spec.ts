import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotgComponent } from './gotg.component';

describe('GotgComponent', () => {
  let component: GotgComponent;
  let fixture: ComponentFixture<GotgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GotgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GotgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
