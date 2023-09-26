import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardComponent } from './todo-dashboard.component';

describe('TodoDashboardComponent', () => {
  let component: TodoDashboardComponent;
  let fixture: ComponentFixture<TodoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDashboardComponent]
    });
    fixture = TestBed.createComponent(TodoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
