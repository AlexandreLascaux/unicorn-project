import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornSummaryComponent } from './unicorn-summary.component';

describe('UnicornSummaryComponent', () => {
  let component: UnicornSummaryComponent;
  let fixture: ComponentFixture<UnicornSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicornSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
