import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dirigerGestionProprio() {

    this.router.navigateByUrl('/list');

  }

  dirigerGestionClient(){
    this.router.navigateByUrl('/listClient');
  }

  dirigerGestionContrat() {
    this.router.navigateByUrl('/listContrat');
  }

  dirigerGestionVisite() {
    this.router.navigateByUrl('/listVisite');
  }

  dirigerGestionClasseStd() {
    this.router.navigateByUrl('/listClassStd');
  }

 
}
