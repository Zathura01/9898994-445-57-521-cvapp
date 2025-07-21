import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIservices } from './uiservices';

describe('UIservices', () => {
  let component: UIservices;
  let fixture: ComponentFixture<UIservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
