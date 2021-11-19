import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.page.html',
  styleUrls: ['./marks.page.scss'],
})
export class MarksPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  menu(){
    this.router.navigate(['/menu/Rahul']);
  }
}
