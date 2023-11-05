import { Module } from "../core/module";

export class Sound extends Module {
  #soundArr = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3"];

  trigger() {
    const sound = new Audio();
    let track = Math.floor(Math.random() * this.#soundArr.length);
    sound.src = `./src/core/assets/${this.#soundArr[track]}`;
    sound.play();
  }
}

