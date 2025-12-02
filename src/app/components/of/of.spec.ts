import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Of } from './of';

describe('Of', () => {
  let component: Of;
  let fixture: ComponentFixture<Of>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Of]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Of);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
