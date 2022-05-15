import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceChangeFormComponent } from './price-change-form.component';

describe('PriceChangeFormComponent', () => {
  let component: PriceChangeFormComponent;
  let fixture: ComponentFixture<PriceChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
