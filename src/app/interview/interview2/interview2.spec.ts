import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interview2 } from './interview2';

describe('Interview2', () => {
  let component: Interview2;
  let fixture: ComponentFixture<Interview2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interview2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interview2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
