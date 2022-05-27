import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewFormComponent } from './renew-form.component';

describe('RenewFormComponent', () => {
  let component: RenewFormComponent;
  let fixture: ComponentFixture<RenewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
