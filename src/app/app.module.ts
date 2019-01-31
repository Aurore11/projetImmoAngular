import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeleFormulaireComponent } from './modeleFomulaire/modele-formulaire.component';

//import du module 
import {FormsModule} from '@angular/forms';

//import du module de HttpClientModule qui encapsule le HttpClient
import {HttpClientModule} from '@angular/common/http';
import { ListProprietaireComponent } from './composants/list-proprietaire/list-proprietaire.component';
import { AddCreateComponent } from './composants/add-create/add-create.component';
import { ListClasseStandardComponent } from './composants/list-classe-standard/list-classe-standard.component';
import { AddCreateClasseStdComponent } from './composants/add-create-classe-std/add-create-classe-std.component';
<<<<<<< HEAD
import { ListClientsComponent } from './composants/list-clients/list-clients.component';
import { AddCreateClientComponent } from './add-create-client/add-create-client/add-create-client.component';
=======
import { ListVisiteComponent } from './composants/list-visite/list-visite.component';
import { AddCreateVisiteComponent } from './composants/add-create-visite/add-create-visite.component';
import { ListContratComponent } from './composants/list-contrat/list-contrat.component';
import { AddCreateContratComponent } from './composants/add-create-contrat/add-create-contrat.component';
>>>>>>> 298d3248d8b47df8a933074ad5f37a2cca871c1e

@NgModule({
  declarations: [
    AppComponent,
    ModeleFormulaireComponent,
    ListProprietaireComponent,
    AddCreateComponent,
    ListClasseStandardComponent,
    AddCreateClasseStdComponent,
<<<<<<< HEAD
    ListClientsComponent,
    AddCreateClientComponent
=======
    ListVisiteComponent,
    AddCreateVisiteComponent,
    ListContratComponent,
    AddCreateContratComponent
>>>>>>> 298d3248d8b47df8a933074ad5f37a2cca871c1e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ajout du module pour la directive ngForm du formulaire 
    HttpClientModule //ajout du module utilisé pour le service web


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
