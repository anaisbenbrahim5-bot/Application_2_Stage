import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LogService } from '../../services/log-service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  logsevice:LogService=inject(LogService);
  fb=inject(FormBuilder);
  ComponentForm=this.fb.nonNullable.group({
    date:[''],
    hour:[''],
    num_carte:[''],
    component: [''],
    expected:[''],
    actual:[''],
    low:[''],
    high:[''],
    problem:['']
  });
  
}
