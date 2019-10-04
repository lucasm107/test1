import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../service/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor( private deseosService: DeseosService,
               private route: ActivatedRoute,
               private nativeAudio: NativeAudio,
               public platform: Platform ) {

    const listaId = this.route.snapshot.paramMap.get('listaId');

    this.lista = this.deseosService.obtenerLista( listaId );

    this.platform.ready().then(() => {
      // preloadComplex: function ( id, assetPath, volume, voices, delay, successCallback, errorCallback)
      this.nativeAudio.preloadComplex ('uniqueId2', 'assets/audio/tarapatin.mp3', 1, 1, 0).then( (success) => {
        console.log('success');
      }, (error) => {
        console.log(error);
      });

    });

  }

  ngOnInit() {
  }

  playTerminadaMp3() {
    this.nativeAudio.play('uniqueId2').then((success) => {
      console.log('success playing');
    }, (error) => {
      console.log(error);
    });
  }

  agregarItem() {

    if( this.nombreItem.length === 0 ) {
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this.deseosService.guardarStorage();

  }
  
  cambioCheck( item: ListaItem ) {
    const pendientes = this.lista.items.filter( itemData => !itemData.completado ).length;
    console.log( {pendientes} );

    if ( pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
      this.playTerminadaMp3();


    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();

  }

  borrar( i: number ) {

    this.lista.items.splice( i, 1 );
    this.deseosService.guardarStorage();

  }

}
