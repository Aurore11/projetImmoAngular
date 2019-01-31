import { ClasseStandard } from './ClasseStandard';
;

export class Client {
    id:number;
    nom:string;
    adresse:string;
    codePostal:string;
    localite:string;
    telephone:string;
    listeClasseStd:[ClasseStandard];
}
