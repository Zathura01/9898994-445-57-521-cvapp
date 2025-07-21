import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadings } from './loadings';

describe('Loadings', () => {
  let component: Loadings;
  let fixture: ComponentFixture<Loadings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loadings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loadings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
