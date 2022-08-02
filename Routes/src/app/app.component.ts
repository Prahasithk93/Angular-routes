import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { authService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Routes';
  constructor(private activatedRoute: ActivatedRoute, private authService:authService){}

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
