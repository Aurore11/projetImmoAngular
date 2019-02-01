import { Component, OnInit } from '@angular/core';
import { BienImmobilier } from 'src/app/modele/BienImmobilier';
import { BienImmobilierService } from 'src/app/services/bien-immobilier.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proprietaire } from 'src/app/modele/Proprietaire';

@Component({
  selector: 'app-add-create-bien-immobilier',
  templateUrl: './add-create-bien-immobilier.component.html',
  styleUrls: ['./add-create-bien-immobilier.component.css']
})
export class AddCreateBienImmobilierComponent implements OnInit {

  BI: BienImmobilier
  proprio: Proprietaire

  constructor(private BIService: BienImmobilierService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //récupération du paramètre de route id
        const idBI = +parameterMap.get('id')
        //méthode pour récupérer le bien immobilier en fonction de l'id
        this.getBIById(idBI)
      }
    )
  }//end ngOnInit

  getBIById(idBI: number) {

    if (idBI === 0) {
      this.BI = {
        //ajout d'un bien immobilier
        id: null,
        modeOffre: null,
        statut: null,
        dateSoumission: null,
        adresse: null,
        codePostal: null,
        localite: null,
        dateDisposition: null,
        revenueCadastral: null,
      }
    } else {
      //edition du bien immobilier
      //on récupère les infos du BI pour les afficher dans le formulaire d'édition
      this.BIService.getBIById(idBI)

      //recup du proprietaire (data) retourné par le service
      //affectation du proprietaire dans la variable proprietaire
      data => this.BI = data

    }

  }//end getBIById

  saveBI() {
    if (this.BI.id === 0) {
      //création du BI
      var idProprio = this.proprio.id
      this.BIService.ajouterBI(this.BI, idProprio).subscribe()
    } else {
      //modif de BI
      this.BIService.modifierBI(this.BI).subscribe()
    }
  }//end saveBI

}
