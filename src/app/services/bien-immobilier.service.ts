import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietaire } from '../modele/Proprietaire';
import { BienImmobilier } from '../modele/BienImmobilier';
import { ClasseStandard } from '../modele/ClasseStandard';

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierService {

  //adresse du web service
  adresse_web_service = ""

  constructor(private httpclient: HttpClient) { }

  getAllBI(): Observable<BienImmobilier[]> {
    return this.httpclient.get<BienImmobilier[]>(this.adresse_web_service)
  }

  supprimerBI(BI: BienImmobilier): Observable<void> {
    return this.httpclient.delete<void>(`${this.adresse_web_service}/${BI.id}`)
  }

  getListBIByIdProprietaire(proprio: Proprietaire): Observable<BienImmobilier[]> {
    return this.httpclient.get<BienImmobilier[]>(`${this.adresse_web_service}/${proprio.id}`)
  }

  getlListBIByIdClasseStd(classe: ClasseStandard): Observable<BienImmobilier[]> {
    return this.httpclient.get<BienImmobilier[]>(`${this.adresse_web_service}/${classe.id}`)
  }

  getBIById(idBI: number): Observable<BienImmobilier> {
    return this.httpclient.get<BienImmobilier>(`${this.adresse_web_service}/${idBI}`)
  }

  ajouterBI(BI: BienImmobilier, idProprio: number): Observable<number> {
    var data = { BI, idProprio }
    return this.httpclient.post<number>(`${this.adresse_web_service}/${BI.id}`, data, { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
  }

  modifierBI(BI: BienImmobilier): Observable<void> {
    return this.httpclient.put<void>(`${this.adresse_web_service}/${BI.id}`, BI, { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
  }

}
