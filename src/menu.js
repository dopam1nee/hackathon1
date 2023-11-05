<<<<<<< HEAD
import {Menu} from './core/menu';

=======
import { Menu } from './core/menu'
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5

export class ContextMenu extends Menu {
  #modules

  constructor(type, text) {
    super(type, text)
    this.#modules = []
    this.open()

<<<<<<< HEAD
    this.el.addEventListener("click", (event) => {
      const li = event.target.closest("li");
      const liDataType = event.target.dataset.type;
      
      if(li) {
        const currentModule = this.#modules.find((module) => module.type === liDataType);
        currentModule.trigger();
        this.el.classList.remove('open');
      }
    });
  }

  open() {
    let menu = this.el;
=======
    this.el.addEventListener('click', (event) => {
      const li = event.target.closest('li')
      const liDataType = event.target.dataset.type

      if (li) {
        const currentModule = this.#modules.find(
          (module) => module.type === liDataType
        )
        currentModule.trigger()
        this.el.classList.remove('open')
      }
    })
  }

  open() {
    let menu = this.el
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      let mouseClickY = event.clientY
      let mouseClickX = event.clientX
<<<<<<< HEAD
      
=======

>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5
      const userWindowHeight = document.documentElement.clientHeight
      const userWindowWidth = document.documentElement.clientWidth

      menu.classList.add('open')

      const menuStyleproperties = getComputedStyle(menu)
<<<<<<< HEAD
      
      const menuWidth = parseInt(menuStyleproperties.width)
      const menuHeight = parseInt(menuStyleproperties.height)
      
      if (mouseClickX + menuWidth > userWindowWidth) {
        mouseClickX = userWindowWidth - menuWidth;
      }
      
      if (mouseClickY + menuHeight > userWindowHeight) {
        mouseClickY = userWindowHeight - menuHeight;
      }
      
      menu.style.top = `${mouseClickY}px`
      menu.style.left = `${mouseClickX}px`
      menu.style.opacity = '1'
      
=======

      const menuWidth = parseInt(menuStyleproperties.width)
      const menuHeight = parseInt(menuStyleproperties.height)

      if (mouseClickX + menuWidth > userWindowWidth) {
        mouseClickX = userWindowWidth - menuWidth
      }

      if (mouseClickY + menuHeight > userWindowHeight) {
        mouseClickY = userWindowHeight - menuHeight
      }

      menu.style.top = `${mouseClickY}px`
      menu.style.left = `${mouseClickX}px`
      menu.style.opacity = '1'
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5
    })
  }

  close() {
<<<<<<< HEAD
    this.el.classList.remove('open');
=======
    this.el.classList.remove('open')
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5
  }

  add(module) {
    this.#modules.push(module)
    this.el.insertAdjacentHTML('beforeend', module.toHTML())
<<<<<<< HEAD
    
  }

}
=======
  }
}
>>>>>>> 9a64c9f5b9af425389de372b42fe33ab308359e5
