import {Injectable} from '@angular/core';
import {Task, TaskStatus} from '../model/task.model';
import {CRUDTaskService} from "./crud-task.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CrudTaskListService implements CRUDTaskService {
  public Date: Date = new Date();

  private taskList: Task[] = [
    new Task('T1', 'Description de la tâche 1', TaskStatus.A_FAIRE, this.Date),
    new Task('T2', 'Description de la tâche 2', TaskStatus.EN_COURS, this.Date),
    new Task('T3', 'Description de la tâche 3', TaskStatus.TERMINEE, this.Date),
  ];

  readTasks(): Observable<Task[]> {
    return of(this.taskList); // Wrap the array in an observable
  }

  createTask(task: Task): void {
  }

  deleteTask(task: Task): void {
  }

  updateTask(task: Task): void {
  }
}
