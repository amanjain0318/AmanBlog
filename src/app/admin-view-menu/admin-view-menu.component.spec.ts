import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewMenuComponent } from './admin-view-menu.component';

describe('AdminViewMenuComponent', () => {
  let component: AdminViewMenuComponent;
  let fixture: ComponentFixture<AdminViewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
