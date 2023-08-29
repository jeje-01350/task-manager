import { Injectable } from '@angular/core';
import { CrudTaskListService } from './crud-task-list-service';
import { Task, TaskStatus } from '../model/task.model';
import { ByStatutTaskService } from "./by-statut-task-service";
import {map, Observable, of} from 'rxjs'; // Import 'of' for creating an observable

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CrudTaskListService implements ByStatutTaskService {

  getTasksByStatus(): Observable<Task[]> {
    return this.readTasks().pipe(
      map(tasks => tasks.filter(task => task.status === TaskStatus.TERMINEE))
    );
  }

  getTasksAllStatus(): Observable<Task[]> {
    return this.readTasks().pipe(
      map(tasks => tasks.filter(task => task.status !== TaskStatus.TERMINEE))
    );
  }
}
