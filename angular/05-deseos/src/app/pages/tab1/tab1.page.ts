import { Component } from '@angular/core';
import { DeseosService } from '../../service/deseos.service';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController ) {


  }

  async agregarLista(){
  // this.router.navigateByUrl('/tabs/tab1/agregar');
  const alert = await this.alertCtrl.create({
    header: 'Nueva lista de tareas',
    // subHeader: 'Subtitle',
    // message: 'This is an alert message.',
    inputs: [
      {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'

    }
  ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Crear',
        handler: (data) => {
          console.log(data);
          if ( data.titulo.length === 0){
            return;
          }

          const listaId = this.deseosService.crearLista( data.titulo );  // con esto "solo" no redirigue.. sino q agrega la lista en la misma pantalla

          this.router.navigateByUrl( `/tabs/tab1/agregar/${ listaId }` ); // aca si redirijo

        }
      }
    ]
  });

  alert.present();

  }





}
