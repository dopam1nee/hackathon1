import {random} from '../utils'
import {Module} from '../core/module'

export class BackgroundModule extends Module {

  constructor(type, text) {

    super(type, text)
    this.workPartBackground = [
      {
        backgroundColor: `rgb(153, 153, 153)`,
        // id: 1,
      },
      {
        backgroundColor: `rgb(102.102.102)`,
        // id: 2,
      },
      {
        backgroundColor: `rgb(153.204.153)`,
        // id: 3,
      },
      {
        backgroundColor: `rgb(51.204.204)`,
        // id: 4,
      },
      {
        backgroundColor: `rgb(102.153.153)`,
        // id: 5,
      },
      {
        backgroundColor: `rgb(0.153.204)`,
        // id: 6,
      },
      {
        backgroundColor: `rgb(51.153.204)`,
        // id: 7,
      },
      {
        backgroundColor: `rgb(102.102.153)`,
        // id: 8,
      },
      {
        backgroundColor: `rgb(102.102.204)`,
        // id: 9,
      },
      {
        backgroundColor: `rgb(153.153.204)`,
      },
    ]
  }

  trigger() {
    const randomColor = random(0, this.workPartBackground.length-1)
    console.log('randomColor', randomColor)

    const workPart = document.querySelector('.work-part')
    console.log('workPart', workPart)
    
    const randomBackgroundColor = this.workPartBackground[randomColor]
    console.log('randomBackgroundColor', randomBackgroundColor)
  
    workPart.style.backgroundColor = randomBackgroundColor.backgroundColor
    console.log('finish', workPart.style.background)
  }
}