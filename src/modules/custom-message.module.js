import {random} from '../utils'
import {Module} from '../core/module'

export class CustomMessage extends Module {

  constructor(type, text) {

    super(type, text)
    this.customMessage = [
      {
        text: "Велики те, кто видит, что миром правят мысли..",
        author: "Ральф Эмерсон",
        id: 1,
      },
      {
        text: "Если вы думаете, что на что-то способны, вы правы если думаете, что у вас ничего не получится - вы тоже правы.",
        author: "Генри Форд",
        id: 2,
      },
      {
        text: "Лучше быть уверенным в хорошем результате, чем надеяться на отличный.",
        author: "Уоррен Баффет",
        id: 3,
      },
    ]
  }
  
  trigger() {
    
    const randomNumber = random(0, this.customMessage.length-1)
    const mainContainer = document.querySelector('.main-container')
    
    const quote = document.createElement('blockquote')
    quote.className = 'quote'
    quote.id = this.customMessage[randomNumber].id
    
    const customText = document.createElement('p')
    customText.textContent = this.customMessage[randomNumber].text

    const autorForText = document.createElement('cite')
    autorForText.textContent = this.customMessage[randomNumber].author
    
    quote.append(customText, autorForText)
    mainContainer.append(quote)
    
    setTimeout(() => {
      quote.classList.add('open')
    }, 0)

    setTimeout(() => {
      quote.classList.remove('open')
    }, 3000)

    setTimeout(() => {
      quote.remove()
    }, 4000)
    
  }

}



