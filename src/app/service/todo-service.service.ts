import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:3000/tasks"
  }

  createNewTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }
  fetchAllTask() {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task_id: Number) {
    return this.http.delete<Task>(this.apiUrl + "/" + task_id)
  }
  updateTask(task: Task) {
    return this.http.put<Task>(this.apiUrl + '/' + task.id, task)
  }

}
