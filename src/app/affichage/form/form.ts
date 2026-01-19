import { Component, inject} from '@angular/core';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';
import { Log } from '../../models/log';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form   {
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
  updateForm(log:Log){
    this.ComponentForm.patchValue({
      date:log?.date,
      hour:log?.hour,
      num_carte:log?.num_carte,
      component:log?.component,
      expected:log?.expected,
      actual:log?.actual,
      low:log?.low,
      high:log?.high
    });
  }
  OnSubmit(){
    //console.log(this.ComponentForm);
    
  }
}
