import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MdDialogRef } from '@angular/material';
import { ShowDialog } from './dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library Management System';
  heroes = ['A', 'B', 'C'];
  myHeroes = this.heroes[2];

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(ShowDialog, {
      height: '400px',
      width: '600px'
    });
  }
}
