import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/modele/Contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-create-contrat',
  templateUrl: './add-create-contrat.component.html',
  styleUrls: ['./add-create-contrat.component.css']
})
export class AddCreateContratComponent implements OnInit {

  //propriété de type Visite liée aux input du formulaire avec la directive ngModel
  contrat: Contrat;

  constructor(private contratService: ContratService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //récupération du paramètre de route id
        const idContrat = +parameterMap.get('refContrat');

        //méthode pour récupérer le contrat en fonction de l'id
        this.getContratById(idContrat);
      }
    );
  }

  getContratById(idContrat: number) {
    if (idContrat === 0) {
      //ajout d'un nouveau contrat
      this.contrat = {
        refContrat: null,
        client: null,
        bienImmo: null,
        agent: null,
      }
    } else {
      //edition du contrat
      //on récupère les infos du contrat pour les afficher dans le formulaire d'édition
      this.contratService.getContratParId(idContrat).subscribe(

        //recup du contrat (data) retournée par le service
        //affectation du contrat dans la variable contrat
        data => this.contrat = data

      );
    }

  }//end getContratById

  saveContrat() {

    if (this.contrat.refContrat === null) {
      //création du contrat
      this.contratService.ajouterContrat(this.contrat).subscribe();
    } else {
      //edition du contrat
      this.contratService.updateContrat(this.contrat).subscribe();
    }

  }//end saveContrat

}
