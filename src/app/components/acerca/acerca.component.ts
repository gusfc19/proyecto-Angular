import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  public alumnos: any;

  constructor() {
    this.alumnos = [
      {nombre: 'Jerry', email: 'jerry@email.com'},
      {nombre: 'Irene', email: 'irene@email.com'},
      {nombre: 'Cristina', email: 'cristina@email.com'},
      {nombre: 'Karina', email:'karina@email.com'}
    ];
  }

  ngOnInit() {
  }

}
