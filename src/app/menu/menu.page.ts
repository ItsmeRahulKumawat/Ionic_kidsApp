import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  data:any;
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { 

    this.data = this.activatedRoute.snapshot.paramMap.get('username')
  }

  ngOnInit() {
  }

  learn(){
    this.router.navigate(['/mainpage']);
  }
  leaderboard(){
    this.router.navigate(['/leaderboard']);
  }
  quiz(){
    this.router.navigate(['/quiz']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
}
