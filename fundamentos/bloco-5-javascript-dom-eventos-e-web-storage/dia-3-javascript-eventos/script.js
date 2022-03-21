function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Ex 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const listaDias = document.querySelector('#days');
for (let index of dezDaysList) {
    let dia = document.createElement('li');
    dia.innerText = index;
    dia.classList.add('day');
    if (index === 24 || index === 25 || index === 31) {
        dia.classList.add('holiday');
    }
    if (index === 4 || index === 11 || index === 18 || index === 25) {
        dia.classList.add('friday');
    }
    listaDias.appendChild(dia);
}

// Ex 2

function criaBotao(nomeBotao) {
    let auxbotao = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerHTML = nomeBotao;
    auxbotao.appendChild(botao);
}

criaBotao('Feriados');

// Ex 3

function clickFeriadoCor() {
    let botao = document.querySelector('#btn-holiday');
    let diasFeriados = document.getElementsByClassName('holiday');

    botao.addEventListener('click', function () {
        for (let index = 0; index < diasFeriados.length; index += 1) {
            if (diasFeriados[index].style.backgroundColor === '') {
                diasFeriados[index].style.backgroundColor = 'yellow';
            }
            else if (diasFeriados[index].style.backgroundColor === 'yellow') {
                diasFeriados[index].style.backgroundColor = '';
            }
        }
    });
};

clickFeriadoCor();

// Ex 4

function criaBotaoFriday(nomeBotao) {
    let auxbotao = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.id = 'btn-friday';
    botao.innerHTML = nomeBotao;
    auxbotao.appendChild(botao);
};

criaBotaoFriday('Sexta-feira');

// Ex 5

function clickSexta() {
    let botao = document.querySelector('#btn-friday');
    let diasDeSexta = document.getElementsByClassName('friday');

    botao.addEventListener('click', function () {
        for (let index = 0; index < diasDeSexta.length; index += 1) {
            if (diasDeSexta[index].innerText !== 'Sextou!') {
                diasDeSexta[index].innerText = 'Sextou!';
            } else if (index === 0) {
                diasDeSexta[index].innerText = '4';
            } else if (index === 1) {
                diasDeSexta[index].innerText = '11';
            } else if (index === 2) {
                diasDeSexta[index].innerText = '18';
            } else if (index === 3) {
                diasDeSexta[index].innerText = '25';
            }
        }
    });
};

clickSexta();

// Ex 6

function zoomDias() {
    let diaZoom = document.querySelectorAll('.day');
    for (let index of diaZoom) {
        index.addEventListener('mouseover', function (alvo) {
            alvo.target.style.fontSize = '30px';
            if (alvo.target.style.color === '') {
                alvo.target.style.color = 'green';
            }
        })
        index.addEventListener('mouseleave', function (alvo) {
            alvo.target.style.fontSize = '20px';
            if (alvo.target.style.color === 'green') {
                alvo.target.style.color = '';
            }
        })

    }
};

zoomDias();

// Ex 7

function adicionaTarefa(tarefa) {
    let meuSpan = document.createElement('span');
    let recebeSpan = document.querySelector('.my-tasks');
    meuSpan.innerHTML = tarefa;
    recebeSpan.appendChild(meuSpan);
};
adicionaTarefa('cozinhar');

// Ex 8

function criaLegendaCor(cor) {
    let minhaDiv = document.createElement('div');
    let recebeSpan = document.querySelector('.my-tasks');
    minhaDiv.className = 'task';
    minhaDiv.style.background = cor;
    recebeSpan.appendChild(minhaDiv);
};
criaLegendaCor('blue');

// Ex 9

function selecionaTarefa() {
    let tarefa = document.getElementsByClassName('task');
    for (let index of tarefa) {
        index.addEventListener('click', function (alvo) {
            console.log(index.classList);
            if (index.className === 'task selected') {
                alvo.target.classList.remove('selected');
            } else {
                alvo.target.classList.add('selected');
            }
        })
    }
};
selecionaTarefa();

// Ex 10

function corCompromissoDia() {
    let diaZoom = document.querySelectorAll('.day');

    for (let index of diaZoom) {
        index.addEventListener('click', function (alvo) {
            let corCompromissoSelecionado = document.querySelector('.selected');
            let corDia;
            if (corCompromissoSelecionado !== null) {
                corDia = corCompromissoSelecionado.style.backgroundColor;
            }
            if (alvo.target.style.color !== corDia) {
                alvo.target.style.color = corDia;
            } else {
                alvo.target.style.color = '';
            }
        })
    }
};
corCompromissoDia();

// Bônus

function acionaEntrada() {
    let botao = document.getElementById('btn-add');
    botao.addEventListener('click', function (e) {
        let caixaEntrada = document.getElementById('task-input').value;
        console.log(caixaEntrada);
        criaNovoCompromisso();
    })
    document.addEventListener('keyup', function (event) {
        let tecla = event.key;
        if (tecla === 'Enter'){
            criaNovoCompromisso();
        }
    })
};
acionaEntrada();

function criaNovoCompromisso() {

    let criaLi = document.createElement('li');
    let caixaEntrada = document.getElementById('task-input').value;
    if (caixaEntrada !== '') {
        criaLi.innerText = caixaEntrada;
        document.querySelector('.task-list').appendChild(criaLi);
        document.getElementById('task-input').value = '';
    }
};

