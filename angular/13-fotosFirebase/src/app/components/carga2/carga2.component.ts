import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carga2',
  template: `
    <input type="file" (change)="uploadFile($event)" />
    <div>{{ uploadPercent | async }}</div>
    <a [href]="downloadURL | async">{{ downloadURL | async }}</a>
 `
})
export class Carga2Component {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  
  constructor(private storage: AngularFireStorage) {}
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    console.log(this.uploadPercent);
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          
        } )
     )
    .subscribe()
  }
}