import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinersliderComponent } from './linerslider.component';

describe('LinersliderComponent', () => {
  let component: LinersliderComponent;
  let fixture: ComponentFixture<LinersliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinersliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
