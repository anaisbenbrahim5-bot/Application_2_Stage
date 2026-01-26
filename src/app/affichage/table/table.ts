import { DatePipe } from '@angular/common';
import {Component, inject, OnInit,  } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Log } from '../../models/log';
import { LogService } from '../../services/log-service';
import { Form } from '../form/form';

@Component({
  selector: 'app-table',
  imports: [Form,FormsModule,DatePipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  private fb=inject(FormBuilder);
  logservice:LogService=inject(LogService);
  filteredLogs:Log[]=[];
  log:Log|null=null;
  SearchNum:string='';
  alert:boolean=false;
    ngOnInit(): void {
      this.logservice.searchLogs('').subscribe(data => {
        this.filteredLogs = data;
      })
  }
  OnSearch(){
    this.logservice.searchLogs(this.SearchNum).subscribe(data => {
      if (data.length === 0 && !this.alert) {
        alert('carte non trouvée');
        this.alert = true;
      } else {
        this.alert = false;
      }
      this.filteredLogs = data;
    });
  }
  OnSend(l:Log ,ComponentForm:any){
    //console.log(l.component);
    ComponentForm.updateForm(l);
  }
}