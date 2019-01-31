import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../../modele/Proprietaire';
import { ProprietaireService } from '../../services/proprietaire.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-create',
  templateUrl: './add-create.component.html',
  styleUrls: ['./add-create.component.css']
})
export class AddCreateComponent implements OnInit {

  //propriété de type Proprietaire liée aux input du formulaire avec la directive ngModel
  proprietaire: Proprietaire;



  constructor(private proprioService: ProprietaireService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //récupération du paramètre de route id
        const idProprio = +parameterMap.get('id');

        //méthode pour récupérer le propriétaire en fonction de l'id
        this.getProprioById(idProprio);
      } 
    );
  }

  getProprioById(idProprio : number){
    if(idProprio === 0){
      //ajout d'un nouveau propriétaire
      this.proprietaire = {
        id : null,
        nom : null,
        adresse :null,
        codePostal:null,
        localite:null,
        telephonePrive :null,
        telephoneTravail :null
      }
    }else{
      //edition du propriétaire
      //on récupère les infos du propriétaire pour les afficher dans le formulaire d'édition
      this.proprioService.getProprioParId(idProprio).subscribe(

        //recup du proprietaire (data) retourné par le service
        //affectation du proprietaire dans la variable proprietaire
        data => this.proprietaire = data

      );
    }

  }//end getProprioById


  saveProprio(){

    if(this.proprietaire.id === 0){
      //création du proprietaire
      this.proprioService.ajouterProprio(this.proprietaire).subscribe();
    }else{
      //edition du proprietaire
      this.proprioService.updateProprio(this.proprietaire).subscribe();
    }

    //redirection vers la liste des proprios
    this.router.navigate(['list']);

  }//end saveProprio



}
