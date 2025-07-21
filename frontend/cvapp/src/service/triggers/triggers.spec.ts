import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Triggers } from './triggers';

describe('Triggers', () => {
  let component: Triggers;
  let fixture: ComponentFixture<Triggers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Triggers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Triggers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
