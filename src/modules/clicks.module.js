import { Module } from "../core/module"

export class ClicksModule extends Module {
  timer = 0
  // timer = prompt("Таймер в секундах")
  count = 0
  result = 0
  counting = () => {
    this.count++
    console.log("count", this.count)
  }
  trigger() {
    this.timer = prompt("Таймер в секундах")
    window.addEventListener("mousedown", () => {
      this.count++
      console.log("count", this.count) // нужен только для проверки
    })
    // setInterval(() => {
    //   if (this.timer > 0) {
    //     console.log(`Таймер = ${(this.timer -= 1)} `)
    //   }
    // }, 1000)
    setTimeout(() => {
      this.result = this.count
      window.removeEventListener("mousedown", () => {
        this.count++
        // console.log("count", this.count) // нужен только для проверки
      })
      alert(`Количество кликов = ${this.result}`)
    }, `${this.timer * 1000}`)
  }
}