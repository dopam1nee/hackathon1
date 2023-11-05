import { Module } from '../core/module'

export class ClicksModule extends Module {
  timer = 0
  // timer = prompt('Таймер в секундах')
  count = 0
  result = 0
  counting = () => {
    this.count++
    console.log('count', this.count)
  }
  trigger() {
    this.timer = prompt('Таймер в секундах')
    window.addEventListener('mousedown', this.counting)

    setTimeout(() => {
      this.result = this.count
      window.removeEventListener('mousedown', this.counting)
      alert(`Количество кликов ${this.result}`)
      this.count = 0
    }, `${this.timer * 1000}`)
  }
}