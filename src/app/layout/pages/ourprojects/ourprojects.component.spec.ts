import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprojectsComponent } from './ourprojects.component';

describe('OurprojectsComponent', () => {
  let component: OurprojectsComponent;
  let fixture: ComponentFixture<OurprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
