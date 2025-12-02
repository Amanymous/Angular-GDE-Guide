import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstValueFrom } from './first-value-from';

describe('FirstValueFrom', () => {
  let component: FirstValueFrom;
  let fixture: ComponentFixture<FirstValueFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstValueFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstValueFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
