import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTableComponent } from './mt-table.component';

describe('MtTableComponent', () => {
  let component: MtTableComponent;
  let fixture: ComponentFixture<MtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
