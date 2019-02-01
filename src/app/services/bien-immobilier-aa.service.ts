import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BienImmobilierAA } from '../modele/BienImmobilierAA';
import { Observable } from 'rxjs';
import { Proprietaire } from '../modele/Proprietaire';
import { ClasseStandard } from '../modele/ClasseStandard';

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierAAService {

  //adresse web service
  adresse_web_service = ""

  constructor(private httpClient: HttpClient) {
  }

  ajouterBIAA(biAA: BienImmobilierAA, idProprio: number): Observable<void> {
    var data: { biAA, idProprio }
    return this.httpClient.post<void>(`${this.adresse_web_service}/${biAA.id}`, data, { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
  }

  modifierBIAA(biAA: BienImmobilierAA): Observable<void> {
    return this.httpClient.put<void>(`${this.adresse_web_service}/${biAA.id}`, biAA, { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
  }

  getAllBiAA(): Observable<BienImmobilierAA[]> {
    return this.httpClient.get<BienImmobilierAA[]>(this.adresse_web_service)
  }

  supprimerBiAA(biAA: BienImmobilierAA): Observable<void> {
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${biAA.id}`)
  }

  getListBiAAByIdProprietaire(Proprietaire: Proprietaire): Observable<BienImmobilierAA[]> {
    return this.httpClient.get<BienImmobilierAA[]>(`${this.adresse_web_service}/${Proprietaire.id}`)
  }

  getListBiAAByIdClasseStd(classe: ClasseStandard): Observable<BienImmobilierAA[]> {
    return this.httpClient.get<BienImmobilierAA[]>(`${this.adresse_web_service}/${classe.id}`)
  }

  getBiAaById(idBiAa: number): Observable<BienImmobilierAA> {
    return this.httpClient.get<BienImmobilierAA>(`${this.adresse_web_service}/${idBiAa}`)
  }

}
