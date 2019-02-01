import { Component, OnInit } from '@angular/core';
import { BienImmobilierAA } from 'src/app/modele/BienImmobilierAA';
import { Router } from '@angular/router';
import { BienImmobilierAAService } from 'src/app/services/bien-immobilier-aa.service';

@Component({
  selector: 'app-list-bien-immobilier-aa',
  templateUrl: './list-bien-immobilier-aa.component.html',
  styleUrls: ['./list-bien-immobilier-aa.component.css']
})
export class ListBienImmobilierAAComponent implements OnInit {

  //propriete pour recupérer la liste des bien immobilier à vendre
  private BiAA = []

  constructor(private biAaService: BienImmobilierAAService, private router: Router) { }

  /**
    * invocation du service pour la recup des données
  */
  ngOnInit() {
    this.biAaService.getAllBiAA().subscribe(
      data => this.BiAA = data
    )
  }

  supprimerBiAA(BiAA: BienImmobilierAA) {
    this.biAaService.supprimerBiAA(BiAA).subscribe()
  }

  editerBiAa(idBiAa: number) {
    this.router.navigate(['/editerBiAa', idBiAa])
  }

}
