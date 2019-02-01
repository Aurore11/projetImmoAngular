import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/modele/Visite';
import { VisiteService } from 'src/app/services/visite.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-create-visite',
  templateUrl: './add-create-visite.component.html',
  styleUrls: ['./add-create-visite.component.css']
})
export class AddCreateVisiteComponent implements OnInit {

  //propriété de type Visite liée aux input du formulaire avec la directive ngModel
  visite: Visite;

  constructor(private visiteService: VisiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //récupération du paramètre de route id
        const idVisite = +parameterMap.get('id');

        //méthode pour récupérer la visite en fonction de l'id
        this.getVisiteById(idVisite);
      }
    );
  }

  getVisiteById(idVisite: number) {
    if (idVisite === 0) {
      //ajout d'une nouvelle visite
      this.visite = {
        id: null,
        date_visite: null,
        horaire_visite: null,
        agent: null,
      }
    } else {
      //edition de la visite
      //on récupère les infos de la visite pour les afficher dans le formulaire d'édition
      this.visiteService.getVisiteParId(idVisite).subscribe(

        //recup de la visite (data) retournée par le service
        //affectation de la visite dans la variable visite
        data => this.visite = data

      );
    }

  }//end getVisiteById

  saveVisite() {

    if (this.visite.id === 0) {
      //création de la visite
      this.visiteService.ajouterVisite(this.visite).subscribe();
    } else {
      //edition de la visite
      this.visiteService.updateVisite(this.visite).subscribe();
    }

    //redirection vers la liste des visites
    this.router.navigate(['/listVisite']);

  }//end saveVisite

}
