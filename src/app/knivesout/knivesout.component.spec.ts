import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnivesoutComponent } from './knivesout.component';

describe('KnivesoutComponent', () => {
  let component: KnivesoutComponent;
  let fixture: ComponentFixture<KnivesoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnivesoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnivesoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
