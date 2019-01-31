import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClasseStandard } from '../modele/ClasseStandard';

@Injectable({
  providedIn: 'root'
})
export class ClasseStandardService {

  //adresse du web service
  adresse_web_service = "";


  //injection du service httpClient
  constructor(private httpClient: HttpClient) { }

  /**
   * récupération de toutes les classes standards
   */
  
  getAllClassesStd() : Observable<ClasseStandard[]>{
    return this.httpClient.get<ClasseStandard[]>(this.adresse_web_service);
  }//end getAllClassesStd
  

  
  /**
   * Supprimer une classe standard
   * @param classeStd :classe standard à supprimer
   */
  supprimerClasseStd(classeStd : ClasseStandard): Observable<void>{
    return this.httpClient.delete<void>(`${this.adresse_web_service}/${classeStd.id}`);
  }//end supprimerClassStd

  /**
   * recup de la classe standard par son id 
   * @param idclasseStd 
   */
  getClasseStdParId(idclasseStd :number) : Observable<ClasseStandard>{
    return this.httpClient.get<ClasseStandard>(`${this.adresse_web_service}/${idclasseStd}`);
  }//end getClasseStdParId


  /**
   * ajout de la classe satndard
   * @param classeStd : classe standard à ajouter
   */
  ajouterClasseStd(classeStd : ClasseStandard) : Observable<void>{
    return this.httpClient.post<void>(this.adresse_web_service, classeStd, {headers : new HttpHeaders({'content-type' : 'application/json'})});
  }//end ajouterClasseStd

  /**
   * mise à jour d'une classe standard
   * @param classeStd : classe standard à mettre à jour
   */
  updateClasseStd(classeStd : ClasseStandard) : Observable<void>{
    //`${this.adresse_web_service}/${classeStd.id}` : url du ws pour l'edition
    return this.httpClient.put<void>(`${this.adresse_web_service}/${classeStd.id}`, classeStd, {headers : new HttpHeaders({'content-type' : 'application/json'})});
  }



}
