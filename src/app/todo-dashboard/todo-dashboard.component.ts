import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../service/todo-service.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  isDisplay: Boolean = false;
  taskObject: Task = new Task();
  tasks: Task[] = [];
  taskTitle: string = '';
  taskDesc: string = '';
  editTaskTitle: string = '';
  editTaskDesc: string = '';
  editTaskId: number = 0;
  constructor(private todoservice: TodoServiceService) { }
  ngOnInit(): void {
    this.taskObject = new Task();
    this.tasks = [];
    this.taskTitle = this.taskDesc = '';
    this.getTask();
  }

  getTask() {
    this.todoservice.fetchAllTask().subscribe(res => {
      this.tasks = res;
    }, err => console.log(err))
  }

  addNewTask() {
    if (this.taskDesc === '' && this.taskTitle === '') {
      return;
    }
    this.taskObject.taskTitle = this.taskTitle;
    this.taskObject.taskDescription = this.taskDesc;
    this.todoservice.createNewTask(this.taskObject).subscribe(res => {
      this.ngOnInit()
    }, err => alert(err))
  }

  deleteTask(task: Number) {
    this.todoservice.deleteTask(task).subscribe(res => {
      this.getTask();
    }, err => alert(err))
  }

  editTask() {
    this.taskObject.taskTitle = this.editTaskTitle;
    this.taskObject.taskDescription = this.editTaskDesc;
    this.taskObject.id = this.editTaskId;
    this.todoservice.updateTask(this.taskObject).subscribe(res => {
      this.hideShowPopup();
      this.ngOnInit();
    }, err => console.log(err))
  }


  callEdit(task: Task) {
    this.hideShowPopup()
    this.editTaskTitle = task.taskTitle;
    this.editTaskDesc = task.taskDescription;
    this.editTaskId = task.id;
  }
  hideShowPopup() {
    this.isDisplay = !this.isDisplay;
  }
}
