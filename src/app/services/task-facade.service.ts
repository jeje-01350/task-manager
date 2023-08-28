import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crud-task-list.service';
import { ByStatutTaskListService } from './by-statut-task-list.service';
import { Task, TaskStatus } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(
    private crudService: CRUDTaskListService,
    private byStatutService: ByStatutTaskListService
  ) {}

  getTasksByStatus(): Task[] {
    return this.byStatutService.getTasksByStatus();
  }

  getTasksAllStatus(): Task[] {
    return this.byStatutService.getAllTaskInProgress();
  }
}
