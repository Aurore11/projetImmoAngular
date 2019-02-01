import { Component, OnInit } from '@angular/core';
import { BienImmobilierAL } from 'src/app/modele/BienImmobilierAL';
import { Proprietaire } from 'src/app/modele/Proprietaire';
import { Router, ActivatedRoute } from '@angular/router';
import { BienImmobilierALService } from 'src/app/services/bien-immobilier-al.service';

@Component({
  selector: 'app-add-create-bien-immobilier-al',
  templateUrl: './add-create-bien-immobilier-al.component.html',
  styleUrls: ['./add-create-bien-immobilier-al.component.css']
})
export class AddCreateBienImmobilierALComponent implements OnInit {

  BiAl: BienImmobilierAL
  proprio: Proprietaire

  constructor(private BiAlService: BienImmobilierALService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paremaeterMap => {
        //recup param route id
        const idBiAl = +paremaeterMap.get('id')
        //méthode pour recup le bien immobilier à louer
        this.getBiAlBy(idBiAl)
      }
    )
  }

  getBiAlBy(idBiAl: number) {
    if (idBiAl === 0) {
      this.BiAl = {
        id: null,
        modeOffre: null,
        statut: null,
        dateSoumission: null,
        adresse: null,
        codePostal: null,
        localite: null,
        dateDisposition: null,
        revenueCadastral: null,
        chargesMensuelles: null,
        garniture: null,
        loyerMensuel: null,
        montantCaution: null,
        typeBail: null
      }
    } else {
      this.BiAlService.getBiAlById(idBiAl)
      data => this.BiAl = data
    }
  }

  saveBiAl() {
    if (this.BiAl.id === 0) {
      //création du BI AA
      var idProprio = this.proprio.id
      this.BiAlService.ajouterBiAL(this.BiAl, idProprio).subscribe()
    } else {
      //modif BI AA
      this.BiAlService.modifierBiAl(this.BiAl).subscribe()
    }
  }

}
