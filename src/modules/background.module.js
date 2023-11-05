import {Module} from '../core/module';
import {random} from '../utils';

export class BackgroundModule extends Module {

  trigger() {
    
   
    const workPart = document.querySelector('.work-part');

    const randomColors = [];
    
    for(let i = 0; i < 3; i++) {
      const randomColor = random(0, 255);
      randomColors.push(randomColor);
    }
    
    workPart.style.backgroundColor = `rgb(${[...randomColors]})`;

  }


}