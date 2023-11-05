import {random} from '../utils'
import {Module} from '../core/module'

export class BackgroundModule extends Module {

  constructor(type, text) {

    super(type, text);
    this.workPartBackground = [
      {
        backgroundColor: `rgb(153, 153, 153)`,
      },
      {
        backgroundColor: `rgb(102, 102, 102)`,
      },
      {
        backgroundColor: `rgb(153, 204, 153)`,
      },
      {
        backgroundColor: `rgb(51, 204, 204)`,
      },
      {
        backgroundColor: `rgb(102, 153, 153)`,
      },
      {
        backgroundColor: `rgb(0, 153, 204)`,
      },
      {
        backgroundColor: `rgb(51, 153, 204)`,
      },
      {
        backgroundColor: `rgb(102, 102, 153)`,
      },
      {
        backgroundColor: `rgb(102, 102, 204)`,
      },
      {
        backgroundColor: `rgb(153, 153, 204)`,
      },
    ]
  }
  
  trigger() {

    const randomColor = random(0, this.workPartBackground.length-1)
    const workPart = document.querySelector('.work-part')
    const randomBackgroundColor = this.workPartBackground[randomColor]
    workPart.style.backgroundColor = randomBackgroundColor.backgroundColor
  }
}
