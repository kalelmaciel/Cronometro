//seleção dos Botões//
const btnligar = document.querySelector('#btnligar');
const btnpausar = document.querySelector('#btnpausar');
const btnresetar = document.queryselector('#btnresetar');

//seleção de parágrafo de exibiçao de crônometro

const crônometro= document.querySelector('crônometro');

//variaveis de controle

let decseg = 0;
let contando;//variaveis de controle de contagem

//variavel de id

let idcontagem;

//funções de crônometro

function mostraCronometro() {
    decSeg++;                           //incrementa cada décimo de segundo

    let ms = decSeg % 10;               //calcula os décimos de segundo
    let seg = Math.floor(decSeg / 10);  //calcula os segundos
    let min = Math.floor(seg / 60);     //calcula os minutos
    let hora = Math.floor(min / 60);    //calcula as horas

    //Formatação de exibição
    let strDecSeg = ms;
    let strHora = (hora < 10) ? '0' + hora : hora;
    let strMin = (min < 10) ? '0' + min : min;
    let strSeg = (seg < 10) ? '0' + seg : seg;

    //Exibição
    cronometro.innerHTML = `${strHora}:${strMin}:${strSeg}.${strDecSeg}`;
}

//Funções de evento
btnLigar.addEventListener('click', () => {
    if(contando===true){return;}    //Se o cronômetro já estiver contando, não faz nada
    idContagem = setInterval(mostraCronometro, 100);
    btnPausar.innerText = 'Pausar Cronômetro';
    contando = true;
});

btnPausar.addEventListener('click', () => {
    if(contando===true){
        clearInterval(idContagem);                          //Pausa o cronômetro
        btnPausar.innerText = 'Retomar Cronômetro';         //Altera o texto do botão
        contando = false;                                   //Altera a variável de controle
    }else if(contando===false){
        idContagem = setInterval(mostraCronometro, 100);    //Retoma o cronômetro
        btnPausar.innerText = 'Pausar Cronômetro';          //Altera o texto do botão
        contando = true;                                    //Altera a variável de controle
    }else{
        return;
    }
});

btnResetar.addEventListener('click', () => {
    clearInterval(idContagem);                  //Pausa o cronômetro
    cronometro.innerHTML = '00:00:00.0';        //Reseta o cronômetro
    decSeg = 0;                                 //Reseta a variável de controle
    contando = false;                           //Altera a variável de controle
});