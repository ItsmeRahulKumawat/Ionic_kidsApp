import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash1',
  templateUrl: './splash1.page.html',
  styleUrls: ['./splash1.page.scss'],
})
export class Splash1Page implements OnInit {

  constructor(public router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('home');
    },3000);
  }

  ngOnInit() {
  }

}
