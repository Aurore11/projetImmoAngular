import { Component, OnInit } from '@angular/core';
import { ClasseStandard } from '../../modele/ClasseStandard';
import { ClasseStandardService } from '../../services/classe-standard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-create-classe-std',
  templateUrl: './add-create-classe-std.component.html',
  styleUrls: ['./add-create-classe-std.component.css']
})
export class AddCreateClasseStdComponent implements OnInit {

  classeStd: ClasseStandard;


  constructor(private classeStdService: ClasseStandardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //récupération du paramètre de route id
        const idClasseStd = +parameterMap.get('id');

        //méthode pour récupérer la classe standard en fonction de l'id
        this.getClasseStdById(idClasseStd);
      }
    );
  }


  getClasseStdById(idClasseStd: number) {

    if (idClasseStd === 0) {
      //ajout
      this.classeStd={
        id: null,
        Code: null,
        modeOffre: null,
        prixMax: null,
        superficieMin: null,
        listBiensImmo: null
      }

    }else{
      //mise à jour
      //infos de la classe standard pour les afficher dans le formulaire d'édition
      this.classeStdService.getClasseStdParId(idClasseStd).subscribe(

        //recup de la classe standard (data) retournée par le service
        //affectation de la classe standard dans la variable classeStd
        data => this.classeStd = data

      );
    }
  }//end getClasseStdById

  saveProprio(){

    if(this.classeStd.id === 0){
      //création de la classe standard
      this.classeStdService.ajouterClasseStd(this.classeStd).subscribe();
    }else{
      //edition de la classe standard
      this.classeStdService.updateClasseStd(this.classeStd).subscribe();
    }

  }//end saveProprio

}
