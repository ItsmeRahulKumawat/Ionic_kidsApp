import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  data:any;
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { 

    this.data = this.activatedRoute.snapshot.paramMap.get('username')
  }

  ngOnInit() {
  }
  alphabet(){
    this.router.navigate(['/alphabet']);
  }
  shapes(){
    this.router.navigate(['/shapes']);
  }
  number(){
    this.router.navigate(['/number']);
  }
  chuchu(){
    this.router.navigate(['/chuchu']);
  }
  abcd(){
    this.router.navigate(['/abcd']);
  }

}
