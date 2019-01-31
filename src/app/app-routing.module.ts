import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProprietaireComponent } from './composants/list-proprietaire/list-proprietaire.component';
import { AddCreateComponent } from './composants/add-create/add-create.component';
import { AddCreateClasseStdComponent } from './composants/add-create-classe-std/add-create-classe-std.component';
import { ModeleFormulaireComponent } from './modeleFomulaire/modele-formulaire.component';
import { ListClientsComponent } from './composants/list-clients/list-clients.component';
import { AddCreateClientComponent } from './add-create-client/add-create-client/add-create-client.component';

const routes: Routes = [
  {path:'list', component: ListProprietaireComponent},
  {path:'formul', component: ModeleFormulaireComponent},
  {path:'editProprio/:id', component: AddCreateComponent},
  {path:'editClasseStd/:id', component: AddCreateClasseStdComponent},
  {path:'', redirectTo:'/formul', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
