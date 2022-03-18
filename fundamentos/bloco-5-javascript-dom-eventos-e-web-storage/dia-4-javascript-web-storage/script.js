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
        let escolha = 'lightgreen';
        fundo.style.background = escolha;
        localStorage.setItem('Cor-Fundo', escolha);
    })
};
fundoVerde();

function fundoBranco() {
    let botao = document.getElementsByClassName('btn-cor-fundo branco')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'white';
        fundo.style.background = escolha;
        localStorage.setItem('Cor-Fundo', escolha);
    })
};
fundoBranco();

function fontePreto() {
    let botao = document.getElementsByClassName('btn-cor-fonte preto')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'black';
        fundo.style.color = escolha;
        localStorage.setItem('Cor-Fonte', escolha);
    })
};
fontePreto();

function fonteVerde() {
    let botao = document.getElementsByClassName('btn-cor-fonte verde')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'green';
        fundo.style.color = escolha;
        localStorage.setItem('Cor-Fonte', escolha);
    })
};
fonteVerde();

function fonteCinza() {
    let botao = document.getElementsByClassName('btn-cor-fonte cinza')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'gray';
        fundo.style.color = escolha;
        localStorage.setItem('Cor-Fonte', escolha);
    })
};
fonteCinza();
