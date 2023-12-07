import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderVerseComponent } from './spider-verse.component';

describe('SpiderVerseComponent', () => {
  let component: SpiderVerseComponent;
  let fixture: ComponentFixture<SpiderVerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiderVerseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiderVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
