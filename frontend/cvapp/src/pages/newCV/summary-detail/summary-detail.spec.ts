import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDetail } from './summary-detail';

describe('SummaryDetail', () => {
  let component: SummaryDetail;
  let fixture: ComponentFixture<SummaryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
