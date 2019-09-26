import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log( 'servicio spoti listo..');

   }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDOaOMW3fYOOHshCQPViZm239_04oWERYAe-LlXM_TSv6ptIzLx8v0Fh-5Ozs8PSUnzB0aoPWmoZjB1_xg'
    })

     return this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } )
      .pipe( map ( data => data['albums'].items ));
      

  }

  getArtistas( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDOaOMW3fYOOHshCQPViZm239_04oWERYAe-LlXM_TSv6ptIzLx8v0Fh-5Ozs8PSUnzB0aoPWmoZjB1_xg'
    })

    return this.http.get( `https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } )
      .pipe( map ( data => data['artists'].items ));

  }
  
  
}
