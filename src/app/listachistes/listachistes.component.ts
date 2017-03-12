import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listachistes',
  templateUrl: './listachistes.component.html',
  styleUrls: ['./listachistes.component.css']
})
export class ListachistesComponent implements OnInit {
  chiste: Object[];
  constructor() { }

  ngOnInit() {
  }

}
