
class Config {
    constructor() {
        this.tema = 'dark';
    }

    getIndice() {
        let ind = sessionStorage.getItem('indice-menu');
        if(ind == null)
            return 0;
        return ind;
    }

    getTema() {
        let tema = localStorage.getItem('tema');
        if(tema != 'light' || tema != 'dark')
            return 'dark';
        return tema;
    }

    toggleTema() {
        if(this.tema == 'dark')
            this.tema = 'light';
        else if(this.tema == 'light')
            this.tema = 'dark';
    }
}

let config = new Config();

document.querySelector('#btn-tema').addEventListener('click', () => {
    if(config.tema == 'light') {
        document.querySelector(':root').style.setProperty('--cor-fundo', "#0d1117");
        document.querySelector(':root').style.setProperty('--cor-texto', "#fdf4f4");
        config.toggleTema();
    } else if(config.tema == 'dark') {
        document.querySelector(':root').style.setProperty('--cor-fundo', "#f5f7de");
        document.querySelector(':root').style.setProperty('--cor-texto', "#001331");
        config.toggleTema();
    }
});