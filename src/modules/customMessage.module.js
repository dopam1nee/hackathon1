import { Module } from '../core/module'

export class CustomMessage extends Module {
  trigger() {
    function showCustomMessage() {
      const message = prompt('Введите текст сообщения:')
      if (!message) return // Если пользователь не ввел текст, просто выходим

      const duration = prompt('Введите время задержки (в миллисекундах):')
      if (!duration || isNaN(duration)) return // Если введено некорректное значение, выходим

      const customMessage = document.createElement('div')
      customMessage.innerText = message
      customMessage.id = 'customMessage' // Добавляем id

      document.body.appendChild(customMessage)

      setTimeout(function () {
        customMessage.remove() // Удалить элемент после заданной задержки
      }, parseInt(duration))
    }
    showCustomMessage()
  }
}
