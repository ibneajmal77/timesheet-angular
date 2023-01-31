import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { TaskApiService } from '../core/service/task-api.service';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
  formGroup!: FormGroup;
  tasks!: any[];
  cTask: any[] = [];

  constructor(private fromBuilder: FormBuilder, private taskApi: TaskApiService) { }

  ngOnInit(): void {
    this.formGroup = this.fromBuilder.group({
      task: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });

    this.taskApi.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.getComplete();
      },
      error: (e) => console.log(e)
    });
  }

  getComplete() {
    if (this.tasks) {
      this.tasks.forEach((e: any) => {
        if (e.task) {
          this.cTask.push(e.task);
        }
      });
      this.cTask = this.removeDuplicate(this.cTask);
    }
  }

  removeDuplicate(arr: any) {
    return [...new Set(arr)]
  }

  save() {
    if (this.formGroup.valid) {
      this.taskApi.createLog(this.formGroup.value).subscribe({
        next: (data) => {
          this.tasks.unshift(data);
          this.getComplete();
        },
        error: (e) => console.log(e)
      });
    }
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.cTask.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
}