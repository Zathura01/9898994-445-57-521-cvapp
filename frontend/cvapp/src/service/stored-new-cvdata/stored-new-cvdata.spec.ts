import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredNewCVData } from './stored-new-cvdata';

describe('StoredNewCVData', () => {
  let component: StoredNewCVData;
  let fixture: ComponentFixture<StoredNewCVData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoredNewCVData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoredNewCVData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
