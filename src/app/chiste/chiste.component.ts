import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiste',
  templateUrl: './chiste.component.html',
  styleUrls: ['./chiste.component.css']
})
export class ChisteComponent implements OnInit {
  setup: string,
  punchline: string,
  constructor() {
    this.setup = 'Cómo se dice calzoncillo en danés?',
    this.punchline = '¡Escondinabo!'
  }

  ngOnInit() {
  }

}
