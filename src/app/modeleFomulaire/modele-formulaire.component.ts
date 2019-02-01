import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CustomerService } from '../services/customer.service';

//import {FormGroup, FormControl} from '@angular/forms'
import { Agent } from '../modele/Agent';
import { AgentService } from '../services/agent.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modele-formulaire',
  templateUrl: './modele-formulaire.component.html',
  styleUrls: ['./modele-formulaire.component.css']
})
export class ModeleFormulaireComponent {

  username = "";

  password = ""

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) { }


  /**
   * méthode appelée lors du clic sur le bouton 'Se connecter' du formulaire
   */
  seConnecter() {

    if (this.username === "user" && this.password === "pass") {

      this.api.login(
        this.username,
        this.password
      )
        .subscribe(
          r => {
            if (r.token) {
              this.customer.setToken(r.token);
              this.router.navigateByUrl('/accueil');
            }
          },
          r => {
            alert(r.error.error);
          });

    }

    this.api.login(
      this.username,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/formul');
          }
        },
        r => {
          alert(r.error.error);
        });

  }
}
