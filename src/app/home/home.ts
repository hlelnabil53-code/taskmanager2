import { Component } from '@angular/core';
import { TaskService } from '../task-service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  taskForm: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.taskService.addTask(this.taskForm.value.title);
  }
}

