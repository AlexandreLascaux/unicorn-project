import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnishopComponent } from './unishop.component';

describe('UnishopComponent', () => {
  let component: UnishopComponent;
  let fixture: ComponentFixture<UnishopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnishopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnishopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
