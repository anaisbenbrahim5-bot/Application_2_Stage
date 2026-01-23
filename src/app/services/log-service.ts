import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../models/log';
const URL="http://localhost/stage/getlog.php";
@Injectable({
  providedIn: 'root',
})
export class LogService {
  private http:HttpClient=inject(HttpClient);
  public searchLogs(num: string): Observable<Log[]> {
    return this.http.get<Log[]>(`${URL}?num_carte=${num}`);
  }
}
