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
  private clients = [];

  constructor( private clientService : ClientService ,  private router : Router) { }


  //invocation du service pour la récupération des données
  ngOnInit() {
    this.clientService.getAllClient().subscribe(
      data => this.clients = data
    );
  }
  /**
   * supprimer une classeStd
   */
  suppClient(client : Client){
    this.clientService.supprimerClient(client).subscribe(
      () =>{

        //Filtrage du tableau proprietaires
        /**
         * la méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
         * qui remplisssent une condition déterminée par la fonction callback (l'expression lambda)
         */
        this.clients =this.clients.filter(cli => cli !== client)

      }

  );
  }//end suppClassStd
/**
   * redirection vers le formulaire d'ajout/édition
   * @param client
   */
  editClient(idClient : number){
    this.router.navigate(['/editClient', idClient]);
  }//end editClient

  /**
   * redirection vers la liste des clients
   */
  getAllClient(){

  }//end getAllClients

 
  dirigerAccueil(){
    this.router.navigateByUrl('/accueil');
  }

}
