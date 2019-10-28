import { Observable } from 'rxjs';


export class FileItem {
    public archivo: File;
    public nombreArchivo: string;
    public url: Observable<number>;
    public estaSubiendo: boolean;
    public progreso: Observable<number>;

    constructor( archivo: File) {

        this.archivo = archivo;
        this.nombreArchivo = archivo.name;

        this.estaSubiendo = false;
        this.progreso = null;

    }
}