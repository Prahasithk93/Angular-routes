import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { GuardService } from './guard.service';
import { authService } from './auth.service';
import { FormComponent } from './form/form.component';
import { CanDeactivateGuardService } from './candeactivate.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    PipesComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GuardService,authService,CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
