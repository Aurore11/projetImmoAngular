import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proprietaire } from '../modele/Proprietaire';


@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  //adresse du web service
  adresse_web_service ="http://localhost:8080/dev.appli.gestion.immobiliere/propriotWs/listeProprio";

  //injection du service httpClient
  constructor(private httpClient : HttpClient) { }


  /**
   * récupération de tous les propriétaires
   */
  getAllProprio() : Observable<Proprietaire[]>{
    //envoi d'une requête http GET vers le ws REST
    return this.httpClient.get<Proprietaire[]>(this.adresse_web_service);
  }//end getAllProprio

  /**
   * supprimer un propriétaire
   * @param proprio : propriétaire à supprimer
   */
  supprimerProprio(proprio: Proprietaire) :Observable<void>{
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${proprio.id}`);
  }//end supprimerProprio

  
  /**
   * récupération d'un propriétaire par son id
   * @param idProprio : id du proprio à récupérer
   */
  getProprioParId(idProprio : number) :Observable<Proprietaire>{
    //`${this.adresse_web_service}/${idProprio}`: url du web service REST pour la récupération
    return this.httpClient.get<Proprietaire>(`${this.adresse_web_service}/${idProprio}`);
  }//end getPropById 


  /**
   * ajout d'un propriétaire
   * @param proprio : propriétaire à ajouter
   */
  ajouterProprio(proprio : Proprietaire): Observable<void>{
    //headers : new HttpHeaders : configuration des en-têtes
    return this.httpClient.post<void>(this.adresse_web_service, proprio,{headers : new HttpHeaders({'content-type':'application/json' })} );
  }//end ajouterProprio

  /**
   * mise à jour d'un propriétaire
   * @param proprio : propriétaire à mettre à jour
   */
  updateProprio(proprio : Proprietaire) : Observable<void>{
    //`${this.adresse_web_service}/${proprio.id}` : url du web service REST pour l'édition
    return this.httpClient.put<void>(`${this.adresse_web_service}/${proprio.id}` , proprio, {headers : new HttpHeaders({'content-type':'application/json' })} );
  }

}
