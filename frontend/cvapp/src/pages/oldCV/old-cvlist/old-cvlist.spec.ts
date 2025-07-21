import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCVList } from './old-cvlist';

describe('OldCVList', () => {
  let component: OldCVList;
  let fixture: ComponentFixture<OldCVList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldCVList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldCVList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
