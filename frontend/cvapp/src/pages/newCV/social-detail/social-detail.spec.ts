import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDetail } from './social-detail';

describe('SocialDetail', () => {
  let component: SocialDetail;
  let fixture: ComponentFixture<SocialDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
