import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crud-task-list.service';
import { Task, TaskStatus } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskListService {
  getTasksByStatus(): Task[] {
    return this.readTasks().filter(task => task.status === TaskStatus.TERMINEE);
  }

  getAllTaskInProgress(): Task[] {
    return this.readTasks().filter(task => task.status != TaskStatus.TERMINEE);
  }
}
