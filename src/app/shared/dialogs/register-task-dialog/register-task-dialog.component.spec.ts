import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaskDialogComponent } from './register-task-dialog.component';

describe('RegisterTaskDialogComponent', () => {
  let component: RegisterTaskDialogComponent;
  let fixture: ComponentFixture<RegisterTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
