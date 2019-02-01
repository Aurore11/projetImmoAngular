import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proprietaire } from '../modele/Proprietaire';
import { Observable } from 'rxjs';
import { BienImmobilierAL } from '../modele/BienImmobilierAL';
import { ClasseStandard } from '../modele/ClasseStandard';

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierALService {

  //adresse web service
  adresse_web_service = ""

  constructor(private httpClient: HttpClient) {
  }

  ajouterBiAL(biAL: BienImmobilierAL, idProprio: number): Observable<void> {
    var data: { biAl, idProprio };
    data.biAl = biAL;
    data.idProprio = idProprio;
    return this.httpClient.post<void>(`${this.adresse_web_service}/${biAL.id}`, data, { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
  }

  modifierBiAl(biAL: BienImmobilierAL): Observable<void> {
    return this.httpClient.put<void>(`${this.adresse_web_service}/${biAL.id}`, biAL, { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
  }

  getAllBiAl(): Observable<BienImmobilierAL[]> {
    return this.httpClient.get<BienImmobilierAL[]>(this.adresse_web_service)
  }

  supprimerBiAl(biAA: BienImmobilierAL): Observable<void> {
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${biAA.id}`)
  }

  getListBiAlByIdProprietaire(Proprietaire: Proprietaire): Observable<BienImmobilierAL[]> {
    return this.httpClient.get<BienImmobilierAL[]>(`${this.adresse_web_service}/${Proprietaire.id}`)
  }

  getListBiAlByIdClasseStd(classe: ClasseStandard): Observable<BienImmobilierAL[]> {
    return this.httpClient.get<BienImmobilierAL[]>(`${this.adresse_web_service}/${classe.id}`)
  }

  getBiAlById(idBiAa: number): Observable<BienImmobilierAL> {
    return this.httpClient.get<BienImmobilierAL>(`${this.adresse_web_service}/${idBiAa}`)
  }

}
