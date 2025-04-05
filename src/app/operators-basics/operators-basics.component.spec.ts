import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsBasicsComponent } from './operators-basics.component';

describe('OperatorsBasicsComponent', () => {
  let component: OperatorsBasicsComponent;
  let fixture: ComponentFixture<OperatorsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorsBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
