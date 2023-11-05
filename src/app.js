import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { CustomMessage } from './modules/customMessage.module'
import { QuoteMessage } from './modules/quote.module'
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

const background = new BackgroundModule('change-background','Изменить цвет фона')
const click = new ClicksModule('count-clicks', 'Считаем клики')
const message = new CustomMessage('show-message', 'Кастомное сообщение')
const quotemessage = new QuoteMessage('show-quotemessage', 'Показать случайную цитату')
const timer = new Timer('show-timer', 'Создать таймер')

let ownMenu = new ContextMenu('.menu')

ownMenu.add(background)
ownMenu.add(click)
ownMenu.add(message)
ownMenu.add(quotemessage)
ownMenu.add(timer)
