import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initialize } from '@ionic/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router) {
  
  this.initializeApp();
}

initializeApp(){
  // this.platform.ready().then(() => {
  //   this.statusBar.styleDefault();
  this.router.navigateByUrl('splash1');
  // });
  
  }
}