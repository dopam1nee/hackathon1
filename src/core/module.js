export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    if (!text) {
      throw new Error('Please specify "text" param')
    }
    this.type = type
    this.text = text
  }

  trigger() {
<<<<<<< HEAD
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
=======
    throw new Error(
      `Trigger method should be implemented in module "${this.type}"`
    )
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5
