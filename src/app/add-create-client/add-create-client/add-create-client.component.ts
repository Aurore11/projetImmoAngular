import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modele/Client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-create-client',
  templateUrl: './add-create-client.component.html',
  styleUrls: ['./add-create-client.component.css']
})
export class AddCreateClientComponent implements OnInit {
client:Client
  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //récupération du paramètre de route id
        const idClientId = +parameterMap.get('id');

        //méthode pour récupérer la classe standard en fonction de l'id
        this.getClientById;
      }
    );
  }
  getClientById(idClient: number) {

    if (idClient === 0) {
      //ajout
      this.client={
        id: null,
        adresse: null,
        nom: null,
        telephone: null,
        listeClasseStd:null,
        
      }

    }else{
      //mise à jour
      //infos des clients  pour les afficher dans le formulaire d'édition
      this.clientService.getClientParId(idClient).subscribe(

        //recup des clients  (data) retournée par le service
        //affectation des clients  dans la variable client
        data => this.client = data

      );
    }
  }//end getClientdById

  saveClient(){

    if(this.client.id === 0){
      //création de la classe standard
      this.clientService.ajouterClient(this.client).subscribe();
    }else{
      //edition d'un client
      this.clientService.updateClientStd(this.client).subscribe();
    }

  }//end saveProprio

}
