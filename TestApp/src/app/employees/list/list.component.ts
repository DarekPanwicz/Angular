import { Component, OnInit } from '@angular/core';
import {Employee} from './../models/employee';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[] = [
          {id=1, firstName= 'Darek', lastName= 'Panwicz', dateOfBirth = 1800, active = true, details:{room:1, position: 'menager'}},
          {id=2, firstName= 'Anna', lastName= 'Andersson', dateOfBirth = 1700, active = false, details:{room:2, position: 'menager'}},
          {id=3, firstName= 'Patryk', lastName= 'Sven', dateOfBirth = 1400, active = false, details:{room:3, position: 'menager'}},
          {id=4, firstName= 'Monika', lastName= 'Ericsson', dateOfBirth = 1900, active = true, details:{room:4, position: 'menager'}},

  ];

  constructor() { }

  ngOnInit() {
  }

}
