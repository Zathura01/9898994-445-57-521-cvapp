import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSelection } from './template-selection';

describe('TemplateSelection', () => {
  let component: TemplateSelection;
  let fixture: ComponentFixture<TemplateSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
