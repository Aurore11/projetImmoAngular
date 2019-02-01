import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from 'src/app/services/bien-immobilier.service';
import { Router } from '@angular/router';
import { BienImmobilier } from 'src/app/modele/BienImmobilier';

@Component({
  selector: 'app-list-bien-immobilier',
  templateUrl: './list-bien-immobilier.component.html',
  styleUrls: ['./list-bien-immobilier.component.css']
})
export class ListBienImmobilierComponent implements OnInit {

  // propriete pour récupérer la liste des Bien immobiliers du ws
  private BI = []

  constructor(private biService: BienImmobilierService, private router: Router) { }

  /**
   * invocation du service pour la recup des données
   */
  ngOnInit() {
    this.biService.getAllBI().subscribe(
      data => this.BI = data
    )
  }

  supprimerBI(BI: BienImmobilier) {
    this.biService.supprimerBI(BI).subscribe()
  }

  editBI(idBI: number) {
    this.router.navigate(['/editBI', idBI])
  }

}
