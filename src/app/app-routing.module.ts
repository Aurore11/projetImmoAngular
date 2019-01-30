import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProprietaireComponent } from './composants/list-proprietaire/list-proprietaire.component';
import { AddCreateComponent } from './composants/add-create/add-create.component';
import { AddCreateClasseStdComponent } from './composants/add-create-classe-std/add-create-classe-std.component';

const routes: Routes = [
  {path:'list', component: ListProprietaireComponent},
  {path:'editProprio/:id', component: AddCreateComponent},
  {path:'editClasseStd/:id', component: AddCreateClasseStdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
