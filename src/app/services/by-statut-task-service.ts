import {Task, TaskStatus} from '../model/task.model';
import { Observable } from 'rxjs';

export interface ByStatutTaskService {
  getTasksByStatus(status: TaskStatus): Observable<Task[]>;
  getTasksAllStatus(): Observable<Task[]>;
}
