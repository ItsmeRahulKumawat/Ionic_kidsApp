import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
})

export class AlphabetPage implements OnInit {

  constructor(private media: Media) { }
  ngOnInit() {
  }

  speakA(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/A.wav";
      audio.play();
  }
  speakB(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/B.wav";
      audio.play();
  }
  speakC(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/C.wav";
      audio.play();
  }
  speakD(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/D.wav";
      audio.play();
  }
  speakE(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/E.wav";
      audio.play();
  }
  speakF(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/F.wav";
      audio.play();
  }
  speakG(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/G.wav";
      audio.play();
  }
  speakH(){
    let audio = new Audio();
      audio.src = "https://evolution.voxeo.com/library/audio/prompts/alphabet/H.wav";
      audio.play();
  }


}
