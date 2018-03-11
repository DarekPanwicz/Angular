import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = [{id= 1, firstName= 'Darek', lastName= 'Panwicz', dateOfBirth = 1800, active = true},
          {id= 2, firstName= 'Anna', lastName= 'Andersson', dateOfBirth = 1700, active = false},
          {id= 3, firstName= 'Patryk', lastName= 'Sven', dateOfBirth = 1400, active = false},
          {id= 4, firstName= 'Monika', lastName= 'Ericsson', dateOfBirth = 1900, active = true},

  ];

  constructor() { }

  ngOnInit() {
  }

}
