import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Visite } from '../modele/Visite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  //adresse du web service
  adresse_web_service = "";

  constructor(private httpClient: HttpClient) { }

  /**
  * récupération de toutes les visites
  */
  getAllVisites(): Observable<Visite[]> {
    //envoi d'une requête http GET vers le ws REST
    return this.httpClient.get<Visite[]>(this.adresse_web_service);
  }//end getAllVisite

  /**
  * supprimer une visite
  * @param visite : visite à supprimer
  */
  supprimerVisite(visite: Visite): Observable<void> {
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${visite.id}`);
  }//end visiteProprio

  /**
   * récupération d'une visite par son id
   * @param idVisite : id de la visite à récupérer
   */
  getVisiteParId(idVisite: number): Observable<Visite> {
    //`${this.adresse_web_service}/${idVisite}`: url du web service REST pour la récupération
    return this.httpClient.get<Visite>(`${this.adresse_web_service}/${idVisite}`);
  }//end getVisiteById 


  /**
   * ajout d'une visite
   * @param visite : visite à ajouter
   */
  ajouterVisite(visite: Visite): Observable<void> {
    //headers : new HttpHeaders : configuration des en-têtes
    return this.httpClient.post<void>(this.adresse_web_service, visite, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }//end ajouterVisite

  /**
   * mise à jour d'une visite
   * @param visite : visite à mettre à jour
   */
  updateVisite(visite: Visite): Observable<void> {
    //`${this.adresse_web_service}/${visite.id}` : url du web service REST pour l'édition
    return this.httpClient.put<void>(`${this.adresse_web_service}/${visite.id}`, visite, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }



}
