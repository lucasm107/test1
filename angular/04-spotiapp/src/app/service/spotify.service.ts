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
      'Authorization': 'Bearer BQA-5qrhsgzpQISr3NpvRYzgP0WN8TYdGHaimiCXHUDiStOJSOsdthB00PhiGDO5XRyNRPbbg-5DkVNoNj8-ZzhT2KhGyvxa27xMHA0zODB5YASBTk'
    })

     return this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } )
      .pipe( map ( data => data['albums'].items ));
      

  }

  getArtistas( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA-5qrhsgzpQISr3NpvRYzgP0WN8TYdGHaimiCXHUDiStOJSOsdthB00PhiGDO5XRyNRPbbg-5DkVNoNj8-ZzhT2KhGyvxa27xMHA0zODB5YASBTk'
    })

    return this.http.get( `https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } )
      .pipe( map ( data => data['artists'].items ));

  }
  
  
}
