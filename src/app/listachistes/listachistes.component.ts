import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listachistes',
  templateUrl: './listachistes.component.html',
  styleUrls: ['./listachistes.component.css']
})
export class ListachistesComponent implements OnInit {
  chistes: Object[];
  constructor(){
    this.chistes=[
      {
        setup: "En el colegio me llaman marica. ¿Y tú que haces?",
        punchline: "Pegarles con el bolso"
      },
      {
        setup: "¿Qué le dice una uva blanca a una uva tinta?",
        punchline: "¡¡¡Respira!!!"
      },
      {
        setup: "¿Qué son, gemelos?",
        punchline: "No, es que el niño es muy nervioso."
      }
    ];
  }

  ngOnInit() {
  }

}
