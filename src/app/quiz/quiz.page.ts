import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
marks(){
  this.router.navigate(['marks']);
}
}
