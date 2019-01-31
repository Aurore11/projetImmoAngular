import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  //déclaration de l'adresse du web service
  adresse_web_service = "";

  /**
   * injection du service HttpClient
   */
  constructor(private httpClient : HttpClient) {}


  /**
   * pour se connecter au site
   */
  tryConnection(){
    
  }

  
}
