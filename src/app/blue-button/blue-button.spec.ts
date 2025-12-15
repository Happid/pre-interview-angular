import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueButton } from './blue-button';

describe('BlueButton', () => {
  let component: BlueButton;
  let fixture: ComponentFixture<BlueButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
