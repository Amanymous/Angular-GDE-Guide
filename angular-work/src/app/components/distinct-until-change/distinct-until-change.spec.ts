import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilChange } from './distinct-until-change';

describe('DistinctUntilChange', () => {
  let component: DistinctUntilChange;
  let fixture: ComponentFixture<DistinctUntilChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctUntilChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctUntilChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
