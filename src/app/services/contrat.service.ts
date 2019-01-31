import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietaire } from '../modele/Proprietaire';
import { Contrat } from '../modele/Contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  //adresse du web service
  adresse_web_service = "";

  //injection du service httpClient
  constructor(private httpClient: HttpClient) { }


  /**
   * récupération de tous les contrats
   */
  getAllContrat(): Observable<Contrat[]> {
    //envoi d'une requête http GET vers le ws REST
    return this.httpClient.get<Contrat[]>(this.adresse_web_service);
  }//end getAllContrat

  /**
   * supprimer un contrat
   * @param contrat : contrat à supprimer
   */
  supprimerContrat(contrat: Contrat): Observable<void> {
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${contrat.refContrat}`);
  }//end supprimerContrat


  /**
   * récupération d'un contrat par son id
   * @param idContrat : id du contrat à récupérer
   */
  getContratParId(idContrat: number): Observable<Contrat> {
    //`${this.adresse_web_service}/${idContrat}`: url du web service REST pour la récupération
    return this.httpClient.get<Contrat>(`${this.adresse_web_service}/${idContrat}`);
  }//end getContratById 


  /**
   * ajout d'un contrat
   * @param contrat : contrat à ajouter
   */
  ajouterContrat(contrat: Contrat): Observable<void> {
    //headers : new HttpHeaders : configuration des en-têtes
    return this.httpClient.post<void>(this.adresse_web_service, contrat, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }//end ajouterContrat

  /**
   * mise à jour d'un contrat
   * @param contrat : contrat à mettre à jour
   */
  updateContrat(contrat: Contrat): Observable<void> {
    //`${this.adresse_web_service}/${contrat.refContrat}` : url du web service REST pour l'édition
    return this.httpClient.put<void>(`${this.adresse_web_service}/${contrat.refContrat}`, contrat, { headers: new HttpHeaders({ 'content-type': 'application/json' }) });
  }
}
