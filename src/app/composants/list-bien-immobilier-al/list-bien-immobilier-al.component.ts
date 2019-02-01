import { Component, OnInit } from '@angular/core';
import { BienImmobilierALService } from 'src/app/services/bien-immobilier-al.service';
import { Router } from '@angular/router';
import { BienImmobilierAL } from 'src/app/modele/BienImmobilierAL';

@Component({
  selector: 'app-list-bien-immobilier-al',
  templateUrl: './list-bien-immobilier-al.component.html',
  styleUrls: ['./list-bien-immobilier-al.component.css']
})
export class ListBienImmobilierALComponent implements OnInit {

  //propriete pour recupérer la liste des bien immobilier à vendre
  private BiAl = []

  constructor(private biAlService: BienImmobilierALService, private router: Router) { }

  ngOnInit() {
    this.biAlService.getAllBiAl().subscribe(
      data => this.BiAl = data
    )
  }

  supprimerBiAl(BiAl: BienImmobilierAL) {
    this.biAlService.supprimerBiAl(BiAl).subscribe()
  }

  editerBiAl(idBiAl: number) {
    this.router.navigate(['/editerBiAl', idBiAl])
  }

}
