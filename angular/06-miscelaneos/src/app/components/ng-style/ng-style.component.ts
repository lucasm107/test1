import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]='40' >
      Hola mundo.. esta es un etiqueta
    </p>

    
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
