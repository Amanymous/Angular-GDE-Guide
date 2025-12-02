import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interview1 } from './interview1';

describe('Interview1', () => {
  let component: Interview1;
  let fixture: ComponentFixture<Interview1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interview1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interview1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
