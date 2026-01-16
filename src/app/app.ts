import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from './affichage/form/form';
import { Table } from './affichage/table/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Application_2_stage');
}
