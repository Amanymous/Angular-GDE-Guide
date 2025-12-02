import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastValueFrom } from './last-value-from';

describe('LastValueFrom', () => {
  let component: LastValueFrom;
  let fixture: ComponentFixture<LastValueFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastValueFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastValueFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
