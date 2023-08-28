import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksRoutingModule} from "./tasks-routing.module";
import {TaskComponent} from "./task/task.component";
import {TaskColorDirective} from "../task-color.directive";
import {CustomDatePipe} from "../custom-date.pipe";
import {TaskListComponent} from "./task-list/task-list.component";
import {MainTaskComponent} from "./main-task/main-task.component";


@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    MainTaskComponent,
    TaskColorDirective,
    CustomDatePipe
  ],
  imports: [CommonModule,TasksRoutingModule],
})
export class TasksModule {}
