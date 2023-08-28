import { Injectable } from '@angular/core';
import {Task, TaskStatus} from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskListService {

  private taskList: Task[] = [
    new Task('Tâche 1', 'Description de la tâche 1', TaskStatus.A_FAIRE, new Date()),
    new Task('Tâche 2', 'Description de la tâche 2', TaskStatus.EN_COURS, new Date()),
    new Task('Tâche 3', 'Description de la tâche 3', TaskStatus.TERMINEE, new Date()),
    new Task('Tâche 4', 'Description de la tâche 4', TaskStatus.TERMINEE, new Date()),
  ];

  readTasks(): Task[] {
    return this.taskList;
  }


}
