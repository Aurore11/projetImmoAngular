import { Component, OnInit } from '@angular/core';
import { ClasseStandard } from '../../modele/ClasseStandard';
import { ClasseStandardService } from '../../services/classe-standard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-classe-standard',
  templateUrl: './list-classe-standard.component.html',
  styleUrls: ['./list-classe-standard.component.css']
})
export class ListClasseStandardComponent implements OnInit {

  //propriété pour récupérer les données du web service
  private classesStandards = [];


  constructor( private classeStdService : ClasseStandardService ,  private router : Router) { }

  //invocation du service pour la récupération des données
  ngOnInit() {
    this.classeStdService.getAllClassesStd().subscribe(
      data => this.classesStandards = data
    );
  }


  /**
   * supprimer une classe standard
   */
  suppClasseStd(classeStd : ClasseStandard){
    this.classeStdService.supprimerClasseStd(classeStd).subscribe(
      //on peut mettre un filtrage si on veut

  );
  }//end suppClassStd

  /**
   * redirection vers le formulaire d'ajout/édition
   * @param idClasseStd 
   */
  editClasseStd(idClasseStd : number){
    this.router.navigate(['/editClasseStd', idClasseStd]);
  }//end editClasseStd

  /**
   * redirection vers la liste des biens immobiliers correspondants à un classe standard
   */
  getAllBiensImmo(){

  }//end getAllBiensImmo


  
  dirigerAccueil(){
    this.router.navigateByUrl('/accueil');
  }


}
