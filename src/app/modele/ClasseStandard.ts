import { Proprietaire } from './Proprietaire';

export class ClasseStandard{
    id: number;
    Code: string;
    modeOffre: boolean;
    prixMax : number;
    superficieMin : number;
    listBiensImmo : [Proprietaire];

}