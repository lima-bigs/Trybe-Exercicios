function fundoPreto() {
    let botao = document.getElementsByClassName('btn-cor-fundo preto')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'black';
        fundo.style.background = escolha;
        localStorage.setItem('Cor-Fundo', escolha);
    })
};
fundoPreto();

function fundoVerde() {
    let botao = document.getElementsByClassName('btn-cor-fundo verde')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        fundo.style.background = 'lightgreen';
    })
};
fundoVerde();

function fundoBranco() {
    let botao = document.getElementsByClassName('btn-cor-fundo branco')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        fundo.style.background = 'white';
    })
};
fundoBranco();

