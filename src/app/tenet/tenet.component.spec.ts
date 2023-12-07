import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenetComponent } from './tenet.component';

describe('TenetComponent', () => {
  let component: TenetComponent;
  let fixture: ComponentFixture<TenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
