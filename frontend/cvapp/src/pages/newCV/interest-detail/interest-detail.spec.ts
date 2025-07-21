import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDetail } from './interest-detail';

describe('InterestDetail', () => {
  let component: InterestDetail;
  let fixture: ComponentFixture<InterestDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
