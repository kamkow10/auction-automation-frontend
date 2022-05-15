import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakePromotionFormComponent } from './fake-promotion-form.component';

describe('FakePromotionFormComponent', () => {
  let component: FakePromotionFormComponent;
  let fixture: ComponentFixture<FakePromotionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakePromotionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakePromotionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
