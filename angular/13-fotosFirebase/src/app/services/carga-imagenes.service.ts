import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  private CARPETA_IMAGEN = 'img';

  constructor( private angularFireStorage: AngularFireStorage, private angularFirestore: AngularFirestore) { }

  cargarImagenesFirebase( imagenes: FileItem[] ) {
    console.log(imagenes);

    const filePath = this.CARPETA_IMAGEN;
    //const storageRef = this.angularFireStorage.ref( filePath );



    for ( const item of imagenes ) {
      console.log( item );
      const file = item.archivo;
      // tslint:disable-next-line: no-shadowed-variable
      const filePath = item.nombreArchivo;
      const fileRef = this.angularFireStorage.ref(filePath);
      const task = this.angularFireStorage.upload(filePath, file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      console.log(this.uploadPercent);
      item.progreso = this.uploadPercent;

      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          console.log('termino');

        } )
       )
      .subscribe();

     /* if ( item.progreso >= 100 ) {
        continue;
      } */

    //  const uploadTask = this.angularFireStorage.upload(filePath, item.nombreArchivo );

      /*
      // observe percentage changes
      item.progreso = uploadTask.percentageChanges();
      // get notified when the download URL is available
      uploadTask.snapshotChanges().pipe(
          finalize(() => {
            // item.url = storageRef.getDownloadURL()
            console.log( storageRef.getDownloadURL() );
           } )
       )
      .subscribe();
      */
    }
  }


  private guardarImagen( imagen: { nombre: string, url: string } ) {
   /* this.angularFirestore.collection( `/${ this.CARPETA_IMAGEN }`)
      .add( imagen );*/
  }
}
