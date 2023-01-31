import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinct, map, Observable, tap } from 'rxjs';
import { Task } from '../interfaces/task';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {

  constructor(private apiService: ApiService) { }

  getTask(taskName: string): Observable<Task[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("fieldName", taskName);
    return this.apiService.get(``, queryParams);
  }

  getLog(taskName: string): Observable<Task[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("fieldName", taskName);
    return this.apiService.get(``, queryParams).pipe(
      map(response => response.data)
    );
  }

  getTasks(): Observable<Task[]> {
    return this.apiService.get(``);
  }

  getTaskNames(): Observable<any[]> {
    return this.apiService.get(``);
  }

  createLog(task: Task): Observable<Task[]> {
    return this.apiService.post(``, task);
  }
}
