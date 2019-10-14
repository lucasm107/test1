import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent  {

  usuario: Object = {
    nombre: 'ini nombre',
    apellido: 'ini ape',
    email: 'ini email'
  }

  constructor() { }

  guardar( forma: NgForm ) {
    console.log('form posteado');
    console.log(forma);
    console.log(this.usuario);

  }

}
