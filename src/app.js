import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { CustomMessage } from './modules/custom-message.module'
import { QuoteMessage } from './modules/quote.module'
import {ShapeModule} from './modules/shape.module'
import {Sound} from './modules/sound.module'
import { Timer } from './modules/timer'

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
document.body.append(mainContainer)

const listItem = document.querySelector('.menu')
mainContainer.append(listItem)

const pageHead = document.createElement('div')
pageHead.className = 'header'
pageHead.textContent = 'HACKATHON TEAM 2'

const workPart = document.createElement('div')
workPart.className = 'work-part'

const startImg = document.createElement('img')
startImg.className = 'img'
startImg.src = '../src/core/assets/HIS-illustr-770x539.png'

workPart.append(startImg)
mainContainer.append(pageHead, workPart)

const background = new BackgroundModule('change-background','Смена фона')
const click = new ClicksModule('count-clicks', 'Счётчик кликов')
const message = new CustomMessage('show-message', 'Сообщение пользователя')
const quotemessage = new QuoteMessage('show-quotemessage', 'Случайная цитата')
const figure = new ShapeModule('create-figure', 'Случайная фигура')
const sound = new Sound('make-sound', 'Случайный звук')
const timer = new Timer('show-timer', 'Таймер')

let ownMenu = new ContextMenu('.menu')

ownMenu.add(background)
ownMenu.add(click)
ownMenu.add(message)
ownMenu.add(quotemessage)
ownMenu.add(figure)
ownMenu.add(sound)
ownMenu.add(timer)
