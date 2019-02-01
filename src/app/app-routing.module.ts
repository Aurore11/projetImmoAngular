import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProprietaireComponent } from './composants/list-proprietaire/list-proprietaire.component';
import { AddCreateComponent } from './composants/add-create/add-create.component';
import { AddCreateClasseStdComponent } from './composants/add-create-classe-std/add-create-classe-std.component';
import { ModeleFormulaireComponent } from './modeleFomulaire/modele-formulaire.component';
import { ListClientsComponent } from './composants/list-clients/list-clients.component';
import { AddCreateClientComponent } from './add-create-client/add-create-client/add-create-client.component';
import { NeedAuthGuard } from './services/auth.guard';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListContratComponent } from './composants/list-contrat/list-contrat.component';
import { ListClasseStandardComponent } from './composants/list-classe-standard/list-classe-standard.component';
import { ListVisiteComponent } from './composants/list-visite/list-visite.component';
import { AddCreateContratComponent } from './composants/add-create-contrat/add-create-contrat.component';
import { AddCreateVisiteComponent } from './composants/add-create-visite/add-create-visite.component';

const routes: Routes = [
  { path: 'list', component: ListProprietaireComponent, canActivate: [NeedAuthGuard] },
  { path: 'formul', component: ModeleFormulaireComponent },
  { path: 'listContrat', component: ListContratComponent, canActivate: [NeedAuthGuard] },
  { path: 'listClassStd', component: ListClasseStandardComponent, canActivate: [NeedAuthGuard] },
  { path: 'listVisite', component: ListVisiteComponent, canActivate: [NeedAuthGuard] },
  {path:'listClient', component: ListClientsComponent},
  {path:'editClient/:id', component: AddCreateClientComponent, canActivate: [NeedAuthGuard] },
  { path: 'editProprio/:id', component: AddCreateComponent, canActivate: [NeedAuthGuard] },
  { path: 'editClasseStd/:id', component: AddCreateClasseStdComponent, canActivate: [NeedAuthGuard] },
  { path: 'editClasseStd/:id', component: AddCreateClasseStdComponent, canActivate: [NeedAuthGuard] },
  { path: 'editContrat/:id', component: AddCreateContratComponent, canActivate: [NeedAuthGuard] },
  { path: 'editVisite/:id', component: AddCreateVisiteComponent, canActivate: [NeedAuthGuard] },
  { path: 'accueil', component: AccueilComponent, canActivate: [NeedAuthGuard] },
  { path: '', redirectTo: '/formul', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
