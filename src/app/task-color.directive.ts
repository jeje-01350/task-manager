// src/app/task-color.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { TaskStatus } from './model/task.model';

@Directive({
  selector: '[appTaskColor]'
})
export class TaskColorDirective {
  @Input('appTaskColor') taskStatus!: TaskStatus;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    switch (this.taskStatus) {
      case TaskStatus.A_FAIRE:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        break;
      case TaskStatus.EN_COURS:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        break;
      case TaskStatus.TERMINEE:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        break;
      default:
        break;
    }
  }
}
