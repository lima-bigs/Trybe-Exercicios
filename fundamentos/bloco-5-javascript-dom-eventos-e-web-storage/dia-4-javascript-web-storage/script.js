function mudaCorFundo() {
    let botao = document.getElementsByClassName('btn-cor-fundo preto')[0];
    let fundo = document.getElementsByClassName('texto')[0];
    botao.addEventlistener('click', function () {
        fundo.style.background = 'black';
        console.log('oi');
    })
};
mudaCorFundo();