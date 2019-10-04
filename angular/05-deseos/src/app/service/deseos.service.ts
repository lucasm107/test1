import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista [] = []

  constructor() {
    console.log( 'servicio iniciado..');

    this.cargarStorage();

    //const lista1 = new Lista('titulo lista 1');
    //const lista2 = new Lista('titulo lista 2');
    //this.listas.push( lista1, lista2);

    console.log( this.listas );
   }

  crearLista( titulo: string ) {
    const nuevaLista = new Lista( titulo );
    this.listas.push( nuevaLista );
    this.guardarStorage(); //al ser asincrono ya tengo el valor antes de retornar el id.. puedo no tener el return q actualiza el this

    return nuevaLista.id;
  }

  borrarLista( lista: Lista ) {
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });

    this.guardarStorage();
  }

  obtenerLista( id: string | number ) {
    id = Number( id );

    return this.listas.find( listaData => listaData.id === id );  // si el id q recibo es igual al listaData.id retorno

  }

  guardarStorage() {

    localStorage.setItem('data', JSON.stringify(this.listas) );

  }

  cargarStorage() {

    if( localStorage.getItem('data') ) {
    this.listas = JSON.parse( localStorage.getItem('data') );
    }else{
      this.listas = [] ; //esto estaria de mas..
    }
  }


}
