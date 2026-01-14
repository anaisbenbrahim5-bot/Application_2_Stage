import { DatePipe } from '@angular/common';
import {Component, inject, OnInit,  } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Log } from '../../models/log';
import { LogService } from '../../services/log-service';

@Component({
  selector: 'app-table',
  imports: [FormsModule,DatePipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  private fb=inject(FormBuilder);
  logservice:LogService=inject(LogService);
  logs:Log[]=[];
  filteredLogs:Log[]=[];
  SearchNum:string='';
  private getDateTime(log: Log): number {
    const [h, m, s] = log.hour.split(':').map(Number);
    const d = new Date(log.date);
    d.setHours(h, m, s || 0);
    return d.getTime();
  }
  
    ngOnInit(): void {
      this.logservice.getLogs().subscribe(data => {
        this.logs = data.map(log => ({
          ...log,
          date: new Date(log.date),
        }));
        this.logs.sort((a, b) => this.getDateTime(b) - this.getDateTime(a));
        this.filteredLogs = [...this.logs];
      });
  }
  OnSearch(){
      this.filteredLogs=this.logs.filter(log=>{
        return !this.SearchNum || log.num_carte.toLocaleLowerCase().includes(this.SearchNum.toLocaleLowerCase()) ;
      });
      this.filteredLogs.sort((a,b)=>this.getDateTime(b) - this.getDateTime(a));
  }
}
