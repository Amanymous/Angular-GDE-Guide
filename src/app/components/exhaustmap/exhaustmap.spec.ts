import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exhaustmap } from './exhaustmap';

describe('Exhaustmap', () => {
  let component: Exhaustmap;
  let fixture: ComponentFixture<Exhaustmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exhaustmap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exhaustmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
