import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProjectComponent } from './admin-view-project.component';

describe('AdminViewProjectComponent', () => {
  let component: AdminViewProjectComponent;
  let fixture: ComponentFixture<AdminViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
