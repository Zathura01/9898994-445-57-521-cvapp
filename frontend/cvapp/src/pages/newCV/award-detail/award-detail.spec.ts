import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardDetail } from './award-detail';

describe('AwardDetail', () => {
  let component: AwardDetail;
  let fixture: ComponentFixture<AwardDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
