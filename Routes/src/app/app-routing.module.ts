import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CanDeactivateGuardService } from './candeactivate.service';
import { FormComponent } from './form/form.component';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
   {
    path: '',
    component: HomeComponent
  },
  {
    path:'routes',
    component:RoutesComponent,
    canActivate: [GuardService]
  },
  {
    path:'pipes', 
    component:PipesComponent,
    canActivate: [GuardService]
  },
  {
    path:'form',
    canDeactivate:[CanDeactivateGuardService],
    component:FormComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
