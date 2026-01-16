import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';
import { Log } from '../../models/log';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form  implements OnInit {
  @Input()log: Log |null=null;
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
  ngOnInit(): void {
    this.ComponentForm.patchValue({
      date:this.log.date,
      hour:this.log.hour,
      num_carte:this.log.num_carte,
      component:this.log.component,
      expected:this.log.expected,
      actual:this.log.actual,
      low:this.log.low,
      high:this.log.high
    });
  }
  OnSubmit(){

  }
}
