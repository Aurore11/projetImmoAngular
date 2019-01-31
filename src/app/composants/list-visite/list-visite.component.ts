import { Component, OnInit } from '@angular/core';
import { VisiteService } from 'src/app/services/visite.service';
import { Router } from '@angular/router';
import { Visite } from 'src/app/modele/Visite';

@Component({
  selector: 'app-list-visite',
  templateUrl: './list-visite.component.html',
  styleUrls: ['./list-visite.component.css']
})
export class ListVisiteComponent implements OnInit {

  // propriete pour récupérer la liste des visites du ws
  private visites = [];



  constructor(private visiteService: VisiteService, private router: Router) { }

  ngOnInit() {
    this.visiteService.getAllVisites().subscribe(
      data => this.visites = data
    );
  }

  /**
  * 
  * @param visite pour supprimer une visite
  */
  suppVisite(visite: Visite) {
    this.visiteService.supprimerVisite(visite).subscribe(

    );
  }

  /**
 * pour éditer une visite
 */
  editVisite(idVisite: number) {
    //redirection (navigation) vers le path editVisite/idVisite => createVisiteComponent (formulaire)
    this.router.navigate(['/editVisite', idVisite]);
  }


}
