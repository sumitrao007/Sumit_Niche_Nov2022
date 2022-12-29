import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDetectionComponent } from './parent-detection.component';

describe('ParentDetectionComponent', () => {
  let component: ParentDetectionComponent;
  let fixture: ComponentFixture<ParentDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
