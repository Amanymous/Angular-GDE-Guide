import { ComponentFixture, TestBed } from '@angular/core/testing';

import { From } from './from';

describe('From', () => {
  let component: From;
  let fixture: ComponentFixture<From>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [From]
    })
    .compileComponents();

    fixture = TestBed.createComponent(From);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
