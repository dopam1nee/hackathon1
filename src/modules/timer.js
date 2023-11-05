import { Module } from "../core/module";

export class Timer extends Module {
  time = 2;

  trigger() {
    let workPart = document.querySelector(".work-part");
    let createTimer = document.createElement("div");
    createTimer.className = "timer";
    workPart.append(createTimer);
    setInterval(() => {
      this.time--;
      if (this.time > 0) {
        createTimer.textContent = `Осталось времени = ${this.time}c `;
      }
    }, 1000);

    setTimeout(() => {
      this.time = 0;
      createTimer.textContent = `Осталось времени = ${this.time}c. Время вышло!`;
    }, `${this.time * 1000}`);
    
    setTimeout(() => {
        this.time = 0;
        createTimer.remove()
      }, `${this.time * 1500}`);
  }

//   if (createTimer){
//     createTimer.remove()
//   }
}