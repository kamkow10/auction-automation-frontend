import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectShopPageComponent } from './connect-shop-page.component';

describe('ConnectShopPageComponent', () => {
  let component: ConnectShopPageComponent;
  let fixture: ComponentFixture<ConnectShopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectShopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
