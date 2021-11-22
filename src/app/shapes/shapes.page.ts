import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
})
export class ShapesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  speakcircle(){
    let audio = new Audio();
    audio.src = "assets/audio/circle.wav";
    audio.play();
  }
  speaksquare(){
    let audio = new Audio();
    audio.src = "assets/audio/square.wav";
    audio.play();
  }
}
