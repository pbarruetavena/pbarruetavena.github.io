

class Menu {
    constructor() {
        this.indice = 0;
        this.menus = [
            document.querySelector('#nav-inicio'), 
            document.querySelector('#nav-perfil'), 
            document.querySelector('#nav-projetos'), 
            document.querySelector('#nav-contato')
        ];
        this.containers = [
            document.querySelector('#container-inicio'), 
            document.querySelector('#container-perfil'), 
            document.querySelector('#container-projetos'), 
            document.querySelector('#container-contato')
        ];
        this.disparaEvento();
    }

    disparaEvento() {
        for(let i = 0; i < this.menus.length; i++) {
            this.menus[i].addEventListener('click', () => {
                this.menus[this.indice].classList.remove('item-selecionado');
                this.containers[this.indice].classList.remove('container-selecionado');
                this.indice = i;
                this.menus[i].classList.add('item-selecionado');
                this.containers[i].classList.add('container-selecionado');
            });
        }
    }
}

let menu = new Menu();
