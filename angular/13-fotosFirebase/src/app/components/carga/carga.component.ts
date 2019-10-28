import { Component, OnInit } from '@angular/core';
import { FileItem } from "../../models/file-item";
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {
  
  estaSobreDrop = false;
  archivos: FileItem[] = [];

  // tslint:disable-next-line: variable-name
  constructor( public _cargaImagenes: CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase( this.archivos );
  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
