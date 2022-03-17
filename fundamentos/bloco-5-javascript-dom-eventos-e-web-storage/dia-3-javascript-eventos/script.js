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
  for (let index of dezDaysList){
    let dia = document.createElement('li');
    dia.innerText = index;
    dia.classList.add('day');
    if (index === 24 || index === 25 || index === 31){
        dia.classList.add('holiday');
    }
    if (index === 4 || index === 11 || index === 18 || index === 25 ){
        dia.classList.add('friday');
    }
    listaDias.appendChild(dia);
  }

  // Ex 2

  function criaBotao(nomeBotao){
    let auxbotao = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerHTML = nomeBotao;
    auxbotao.appendChild(botao);
  }

  // Ex 3

  function clickFeriadoCor(){
      let botao = document.querySelector('#btn-holiday');
      let diasFeriados = document.getElementsByClassName('holiday');
      let corOriginal = 'rgb(238,238,238)';
      let novaCor = 'yellow';

      botao.addEventListener('click', function(){
        if (diasFeriados.style.background == corOriginal){
            diasFeriados.style.background = novaCor;    
        }
        else {
            diasFeriados.style.background = corOriginal;
        }
      });
  };

  clickFeriadoCor();