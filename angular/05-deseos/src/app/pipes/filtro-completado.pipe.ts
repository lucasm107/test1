import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false /// <- es para que actualice las propiedades en todos los componentes, no solo en la q lo esta consumiendo
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true ): Lista[] {

    return listas.filter( lista => {
      return lista.terminada === completada;
    });


  }

}
