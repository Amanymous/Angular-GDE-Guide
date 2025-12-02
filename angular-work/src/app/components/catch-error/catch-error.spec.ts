import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchError } from './catch-error';

describe('CatchError', () => {
  let component: CatchError;
  let fixture: ComponentFixture<CatchError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
