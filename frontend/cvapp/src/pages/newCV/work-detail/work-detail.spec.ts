import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetail } from './work-detail';

describe('WorkDetail', () => {
  let component: WorkDetail;
  let fixture: ComponentFixture<WorkDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
