import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal } from './computed-signal';

describe('ComputedSignal', () => {
  let component: ComputedSignal;
  let fixture: ComponentFixture<ComputedSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
