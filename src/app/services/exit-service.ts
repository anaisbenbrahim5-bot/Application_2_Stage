import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exit } from '../models/exit';
const URL="http://localhost/stage/setExit.php";
@Injectable({
  providedIn: 'root',
})
export class ExitService {
  private http:HttpClient=inject(HttpClient);
  public setExit(e:Exit):Observable<Exit>{
    return this.http.post<Exit>(URL,e, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
