import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVsection } from './cvsection';

describe('CVsection', () => {
  let component: CVsection;
  let fixture: ComponentFixture<CVsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
