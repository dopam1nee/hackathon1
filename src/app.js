import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import {ClicksModule} from './modules/clicks.module';
import {CustomMessage} from './modules/custom-message.module';
import {ShapeModule} from './modules/figure.module';

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
document.body.append(mainContainer);

const listItem = document.querySelector('.menu');
mainContainer.append(listItem);

const pageHead = document.createElement('div')
pageHead.className = 'header'
pageHead.textContent = 'HACKATON TEAM 2'

const workPart = document.createElement('div')
workPart.className = 'work-part'

const startImg = document.createElement('img')
startImg.className = 'img'
startImg.src = '../src/core/assets/HIS-illustr-770x539.png'

workPart.append(startImg)
mainContainer.append(pageHead, workPart)


const background = new BackgroundModule('change-background', 'Изменить цвет фона');
const click = new ClicksModule('count-clicks', 'Считаем клики');
const message = new CustomMessage('show-message', 'Показать сообщение');
const figure = new ShapeModule('create-figure', 'Показать фигуру');

let ownMenu = new ContextMenu('.menu');

ownMenu.add(background);
ownMenu.add(click);
ownMenu.add(message);
ownMenu.add(figure);





