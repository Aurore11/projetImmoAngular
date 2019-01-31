import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms'
import { Agent } from '../modele/Agent';
import { AgentService } from '../services/agent.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modele-formulaire',
  templateUrl: './modele-formulaire.component.html',
  styleUrls: ['./modele-formulaire.component.css']
})
export class ModeleFormulaireComponent implements OnInit {

  agent : Agent;

  constructor(private agentService : AgentService, private router : Router) { }

  /**
   * pour l'initialisation du composant
   */
  ngOnInit() {
    this.agent=new Agent();
  }


  /**
   * méthode appelée lors du clic sur le bouton 'Se connecter' du formulaire
   */
  seConnecter(){
    console.log("Tentative de connexion ")
    //this.agentService.tryConnection();
    this.router.navigate(['/list']);
  }



}
