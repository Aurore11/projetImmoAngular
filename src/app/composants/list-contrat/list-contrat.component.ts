import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/modele/Contrat';


@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  // propriete pour récupérer la liste des contrats du ws
  private contrats = [];


  constructor(private contratService: ContratService, private router: Router) { }

  /**
   * invocation du service pour la recup des données
   */
  ngOnInit() {
    this.contratService.getAllContrat().subscribe(
      data => this.contrats = data
    );
  }


  /**
   * 
   * @param contrat pour supprimer un contrat
   */
  suppContrat(contrat: Contrat) {
    this.contratService.supprimerContrat(contrat).subscribe(


    );
  }

  /**
   * pour éditer un contrat
   */
  editContrat(idContrat: string) {
    //redirection (navigation) vers le path editContrat/idContrat => createContratComponent (formulaire)
    this.router.navigate(['/editContrat', idContrat]);
  }
}
