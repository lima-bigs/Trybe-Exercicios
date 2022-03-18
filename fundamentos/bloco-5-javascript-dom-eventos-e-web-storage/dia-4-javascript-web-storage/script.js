function fundoPreto() {
    let botao = document.getElementsByClassName('btn-cor-fundo preto')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'black';
        texto.style.background = escolha;
        localStorage.setItem('Cor-Fundo', escolha);
    })
};
fundoPreto();

function fundoVerde() {
    let botao = document.getElementsByClassName('btn-cor-fundo verde')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'lightgreen';
        texto.style.background = escolha;
        localStorage.setItem('Cor-Fundo', escolha);
    })
};
fundoVerde();

function fundoBranco() {
    let botao = document.getElementsByClassName('btn-cor-fundo branco')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'white';
        texto.style.background = escolha;
        localStorage.setItem('Cor-Fundo', escolha);
    })
};
fundoBranco();

function fontePreto() {
    let botao = document.getElementsByClassName('btn-cor-fonte preto')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'black';
        texto.style.color = escolha;
        localStorage.setItem('Cor-Fonte', escolha);
    })
};
fontePreto();

function fonteVerde() {
    let botao = document.getElementsByClassName('btn-cor-fonte verde')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'green';
        texto.style.color = escolha;
        localStorage.setItem('Cor-Fonte', escolha);
    })
};
fonteVerde();

function fonteCinza() {
    let botao = document.getElementsByClassName('btn-cor-fonte cinza')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = 'gray';
        texto.style.color = escolha;
        localStorage.setItem('Cor-Fonte', escolha);
    })
};
fonteCinza();

function tamanho16() {
    let botao = document.getElementsByClassName('btn-tamanho-fonte 16')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = '16px';
        texto.style.fontSize = escolha;
        localStorage.setItem('Tamanho-Fonte', escolha);
    })
};
tamanho16();

function tamanho19() {
    let botao = document.getElementsByClassName('btn-tamanho-fonte 19')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = '19px';
        texto.style.fontSize = escolha;
        localStorage.setItem('Tamanho-Fonte', escolha);
    })
};
tamanho19();

function tamanho22() {
    let botao = document.getElementsByClassName('btn-tamanho-fonte 22')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = '22px';
        texto.style.fontSize = escolha;
        localStorage.setItem('Tamanho-Fonte', escolha);
    })
};
tamanho22();

function espaçamentoLinha80() {
    let botao = document.getElementsByClassName('btn-espaçamento-linha 80')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = '80%';
        texto.style.lineHeight = escolha;
        localStorage.setItem('Espaçamento-Linha', escolha);
    })
};
espaçamentoLinha80();

function espaçamentoLinha120() {
    let botao = document.getElementsByClassName('btn-espaçamento-linha 120')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = '120%';
        texto.style.lineHeight = escolha;
        localStorage.setItem('Espaçamento-Linha', escolha);
    })
};
espaçamentoLinha120();

function espaçamentoLinha160() {
    let botao = document.getElementsByClassName('btn-espaçamento-linha 160')[0];
    let texto = document.getElementsByClassName('texto')[0];
    botao.addEventListener('click', function () {
        let escolha = '160%';
        texto.style.lineHeight = escolha;
        localStorage.setItem('Espaçamento-Linha', escolha);
    })
};
espaçamentoLinha160();

