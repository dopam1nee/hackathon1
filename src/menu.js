import {Menu} from './core/menu';


export class ContextMenu extends Menu {

  open() {
    let menu = this.el;

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      menu.style.top = `${event.clientY}px`;
      menu.style.left = `${event.clientX}px`;
      menu.classList.add('open');
      
    })
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    return module.toHTML()
  }

  createMenuItem(modules) {
    
    modules.forEach((module) => {
      const itemCode = this.add(module);
      this.el.innerHTML += itemCode;
    })

    this.el.addEventListener("click", (event) => {
      const li = event.target.closest("li");
      const liDataType = event.target.dataset.type;
      
      if (li) {
        const currentModule = modules.find((module) => module.type === liDataType);
        currentModule.trigger();
        this.el.classList.remove('open');
      }
    });
  }

}