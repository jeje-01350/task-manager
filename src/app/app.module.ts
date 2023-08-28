import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskComponent} from './tasks/task/task.component';
import {TaskListComponent} from './task-list/task-list.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskColorDirective } from './task-color.directive';
import { CustomDatePipe } from './custom-date.pipe';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    MainTaskComponent,
    TaskColorDirective,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
