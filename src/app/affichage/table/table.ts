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
  latestlogs:Log[]=[];
  filteredLogs:Log[]=[];
  SearchNum:string='';
  alert:boolean=false;
   getDateTime(log:Log):number{
    const [h,m,s]=log.hour.split(':').map(Number);
    let d=new Date(log.date);
    d.setHours(h,m,s);
    return d.getTime();
  }
  getLatestDate(logs:Log[]):number{
    let d=this.getDateTime(logs[0]);
    logs.forEach(log => {
      if(this.getDateTime(log)>=d){
        d=this.getDateTime(log);
      }
    });
    return d;
  }
  
    ngOnInit(): void {
      this.logservice.getLogs().subscribe(data => {
        this.logs = data;
        this.latestlogs = this.logs.filter(log=>{
          return this.getDateTime(log)==this.getLatestDate(this.logs);
        });
        this.filteredLogs=[...this.latestlogs];
      });
  }
  OnSearch(){
    if(!this.SearchNum){
      this.filteredLogs=[...this.latestlogs];
      this.alert=false;
    }
    else{
      this.filteredLogs=this.logs.filter(log=>{
        return log.num_carte.toLocaleLowerCase().includes(this.SearchNum.toLocaleLowerCase()) ;
      });
      if(this.filteredLogs.length==0){
        if(!this.alert){
        alert("carte non trouvée");
        this.alert=true;
        }
        return;
      }
      this.alert=false;
      this.filteredLogs.sort((a,b)=>this.getDateTime(b) - this.getDateTime(a));
      //console.log(this.filteredLogs);
  }
  }
}

