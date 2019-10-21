import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIserviceService } from './services/uiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LovelyDay';
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor(public ui: UIserviceService, public fb: FbService, public router: Router){
  }
  // loggedIn = this.fb.isAuth()
  sub1;

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });

    this.fb.auth.userData().subscribe((user) => {
      this.userEmail = user.email;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
