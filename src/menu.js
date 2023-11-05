import {Menu} from './core/menu';


export class ContextMenu extends Menu {
  #modules

  constructor(type, text) {
    super(type, text)
    this.#modules = []
    this.open()

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

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      let mouseClickY = event.clientY
      let mouseClickX = event.clientX
      
      const userWindowHeight = document.documentElement.clientHeight
      const userWindowWidth = document.documentElement.clientWidth

      menu.classList.add('open')

      const menuStyleproperties = getComputedStyle(menu)
      
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
      
    })
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.#modules.push(module)
    this.el.insertAdjacentHTML('beforeend', module.toHTML())
    
  }

}