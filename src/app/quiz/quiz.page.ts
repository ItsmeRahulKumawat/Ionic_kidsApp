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
speakA(){
  let audio = new Audio();
    audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/A.wav";
    audio.play();
}
speakD(){
  let audio = new Audio();
    audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/D.wav";
    audio.play();
}
speaksquare(){
  let audio = new Audio();
    audio.src = "assets/audio/square.wav";
    audio.play();
}
}
