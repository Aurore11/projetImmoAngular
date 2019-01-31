
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Client } from '../modele/Client';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn:'root'
})
export class ClientService{
  //adresse du web service
  adresse_web_service = "http://localhost:8080/dev.appli.gestion.immobiliere/clientWs/listeClient";

//injection du service httpClient
constructor(private httpClient: HttpClient) { }
/**
   * récupération de tout les clients
   */
  
  getAllClient() : Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.adresse_web_service);
  }//end getAllClassesStd
  /**
   * Supprimer un client
   * @param client:client à supprimer
   */
  supprimerClient(client:Client): Observable<void>{
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${client.id}`);
  }//end supprimerClassStd

  /**
   * recup d'un client par son id 
   * @param idclient
   */
  getClientParId(idclient :number) : Observable<Client>{
    return this.httpClient.get<Client>(`${this.adresse_web_service}/${idclient}`);
  }//end getClasseStdParId

  /**
   * ajout du client 
   * @param client : client à ajouter
   */
  ajouterClient(client : Client) : Observable<void>{
    return this.httpClient.post<void>(this.adresse_web_service, client, {headers : new HttpHeaders({'content-type' : 'application/json'})});
  }//end ajouterClient


   /**
   * mise à jour d'un client
   * @param client: client à mettre à jour
   */
  updateClientStd(client : Client) : Observable<void>{
    //`${this.adresse_web_service}/${classeStd.id}` : url du ws pour l'edition
    return this.httpClient.put<void>(`${this.adresse_web_service}/${client.id}`, client, {headers : new HttpHeaders({'content-type' : 'application/json'})});
  }




}
