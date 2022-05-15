import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourActionPageComponent } from './your-action-page.component';

describe('YourActionPageComponent', () => {
  let component: YourActionPageComponent;
  let fixture: ComponentFixture<YourActionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourActionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourActionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
