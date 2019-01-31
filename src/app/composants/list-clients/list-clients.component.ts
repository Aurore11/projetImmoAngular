import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/modele/Client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  //propriété pour récupérer les données du web service
  private client = [];

  constructor( private clientService : ClientService ,  private router : Router) { }


  //invocation du service pour la récupération des données
  ngOnInit() {
    this.clientService.getAllClient().subscribe(
      data => this.client = data
    );
  }
  /**
   * supprimer une classeStd
   */
  suppClientStd(client : Client){
    this.clientService.supprimerClient(client).subscribe(
      //on peut mettre un filtrage si on veut

  );
  }//end suppClassStd
/**
   * redirection vers le formulaire d'ajout/édition
   * @param client
   */
  editClientStd(idClient : number){
    this.router.navigate(['/editClient', idClient]);
  }//end editClient

  /**
   * redirection vers la liste des clients
   */
  getAllClient(){

  }//end getAllClients

 

}
