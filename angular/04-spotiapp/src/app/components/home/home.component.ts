import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  MensajeError: string;

  constructor(  private spotify: SpotifyService) { 

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      //this.newReleases = data.albums.items;
      this.newReleases = data;
      this.loading = false;
    },( errorServicio ) => {

      this.error = true;
      this.loading = false;
      console.log( errorServicio );
      this.MensajeError = errorServicio.error.error.message;

    });

  }

  

}
