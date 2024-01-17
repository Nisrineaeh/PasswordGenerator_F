import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { MyPasswordComponent } from './pages/my-password/my-password.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: AccueilComponent },
  { path: 'generateur', component: GeneratorComponent},
  { path: 'my-password', component: MyPasswordComponent},
  { path: 'my-account', component: AccountComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
