import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from '../../services/proprietaire.service';
import { Router } from '@angular/router';
import { Proprietaire } from '../../modele/Proprietaire';

@Component({
  selector: 'app-list-proprietaire',
  templateUrl: './list-proprietaire.component.html',
  styleUrls: ['./list-proprietaire.component.css']
})
export class ListProprietaireComponent implements OnInit {


  // propriete pour récupérer la liste des propriétaires du ws
  private proprietaires = [];


  constructor( private proprioService : ProprietaireService ,  private router : Router) { }

  /**
   * invocation du service pour la recup des données
   */
  ngOnInit() {
    this.proprioService.getAllProprio().subscribe(
      data => this.proprietaires = data
      
    );
    
  }


  /**
   * 
   * @param proprio pour supprimer un propriétaire
   */
  suppProprio(proprio:Proprietaire){
    this.proprioService.supprimerProprio(proprio).subscribe(

      () =>{

        //Filtrage du tableau proprietaires
        /**
         * la méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
         * qui remplisssent une condition déterminée par la fonction callback (l'expression lambda)
         */
        this.proprietaires =this.proprietaires.filter(prop => prop !== proprio)

      }


    );
  }

  /**
   * pour éditer un propriétaire
   */
  editProprio( idProprio : number){
    //redirection (navigation) vers le path editProprio/idProprio => createProprioComponent (formulaire)
    this.router.navigate(['/editProprio', idProprio]);
  }

  dirigerAccueil(){
    this.router.navigateByUrl('/accueil');
  }
}
