import { Component, OnInit } from '@angular/core';
import { BienImmobilierAA } from 'src/app/modele/BienImmobilierAA';
import { Proprietaire } from 'src/app/modele/Proprietaire';
import { BienImmobilierAAService } from 'src/app/services/bien-immobilier-aa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-create-bien-immobilier-aa',
  templateUrl: './add-create-bien-immobilier-aa.component.html',
  styleUrls: ['./add-create-bien-immobilier-aa.component.css']
})
export class AddCreateBienImmobilierAAComponent implements OnInit {

  BiAa: BienImmobilierAA
  proprio: Proprietaire

  constructor(private BiAaService: BienImmobilierAAService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      parameterMap => {
        //recup param route id
        const idBiAl = +parameterMap.get('id')
        //méthode pour recup le bien immaobilier à acheter en fonction de l'id
        this.getBiAaById(idBiAl)
      }
    )
  }

  getBiAaById(idBiAa: number) {

    if (idBiAa === 0) {
      this.BiAa = {
        //ajout d'un bien immobilier à acheter
        id: null,
        modeOffre: null,
        statut: null,
        dateSoumission: null,
        adresse: null,
        codePostal: null,
        localite: null,
        dateDisposition: null,
        revenueCadastral: null,
        etat: null,
        prixAchatDemande: null
      }
    } else {
      //edition du bien immobilier à acheter
      //on récupère les infos du BIAA pour les afficher dans le formulaire d'édition
      this.BiAaService.getBiAaById(idBiAa)
      //recup du proprietaire (data) retourné par le service
      //affectation du proprietaire dans la variable proprietaire
      data => this.BiAa = data
    }
  }//end getBIById

  saveBiAa() {
    if (this.BiAa.id === 0) {
      //création du BI AA
      var idProprio = this.proprio.id
      this.BiAaService.ajouterBIAA(this.BiAa, idProprio).subscribe()
    } else {
      //modif BI AA
      this.BiAaService.modifierBIAA(this.BiAa).subscribe()
    }
  }


}
