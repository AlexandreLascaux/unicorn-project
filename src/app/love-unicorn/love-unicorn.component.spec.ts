import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveUnicornComponent } from './love-unicorn.component';

describe('LoveUnicornComponent', () => {
  let component: LoveUnicornComponent;
  let fixture: ComponentFixture<LoveUnicornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveUnicornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
