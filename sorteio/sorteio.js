var sorteio = [];

 var tempo = 5;

const sortear = document.getElementById("sortear");

if(sorteio.length == 0){
        sortear.style.display = 'none';
}

var crono = document.getElementById('cronometro');
crono.style.display = 'none';


sortear.onclick = function(){



    let nome = document.getElementById('nome').style.display = 'none';
    let nomeCampo = document.getElementById('nomeCampo').style.display = 'none';
    padrao.style.display = 'none';
    let cronometro = document.getElementById('cronometro').style.display = 'inline';


    crono.style.display = ' inline';
    sortear.style.display = 'none';
    adicionar.style.display = 'none';

    cadastrados.innerHTML = "Restaurante sorteado: ";
    setInterval("contagemRegressiva()", 1000);



       let sorteado = sorteio[Math.floor(Math.random() * (sorteio.length - 0) +0)];

        setInterval(function(){

            cadastrados.innerHTML = "Restaurante sorteado: <br>" + sorteado;


         }, 6000);

}

const adicionar = document.getElementById("adicionar");

adicionar.onclick = function(){
    let incluir = document.getElementById('nome').value.toUpperCase();

           if( inclui(incluir)){

                 document.getElementById('nome').value='';
                 mostrarOpcoes();


               sortear.style.display = "inline";

            }

}

const padrao = document.getElementById("padrao");

padrao.onclick = function(){
    let padroes = ["CARNIVORIA", "OUTBACK", "APPLEBEES", "RASCAL", "COCO BAMBU", "REAL BURGUER", "EL URUGUAIO", "CHOPPING", "JAPONES", "SI SEÑOR", "PECORINO", "MARIA JOÃO", "PARMEGIANNA", "FRUTARIA", "TEXANO", "EL POBRE JUAN", "MADERO", "ALMANARA"];

    for(let i = 0; i<padroes.length; i++){
       inclui(padroes[i]);

    }

    padrao.style.display = 'none';
    sortear.style.display = "inline";
    mostrarOpcoes();
}

var cadastrados = document.querySelector("#cadastrados");
function mostrarOpcoes(){


    cadastrados.innerHTML = '';


    for(let i = 0; i<sorteio.length; i++){

        cadastrados.innerHTML= cadastrados.innerHTML + "<div class='identificador' ondblclick='removido(this)'>" + sorteio[i] + "</div>" + "<br>";
    }
}



// segundos
function contagemRegressiva(){
    let teste = 0;
    let teste2 = document.getElementById('cronometro').style.width;
    if(tempo == 0){
        document.getElementById('cronometro').innerHTML = '';
    }else{
        tempo--;

        document.getElementById('cronometro').innerHTML = tempo + ' segundos';


    }
}


function inclui(adiciona){

    if(!existe(adiciona) && adiciona !==""){

        sorteio.push(adiciona);

        return 1;
    }
    return 0;
}

function existe(testa){
    let existente = 0;
    for(let i = 0; i<sorteio.length; i++){

        if(sorteio[i] === testa){

            existente = 1;
        }
    }

    return existente;

}


function removido(valor){
    let remover = valor.innerHTML;
    remover = sorteio.indexOf(remover);

    sorteio.splice(remover, 1);
    mostrarOpcoes();
    if(sorteio.length === 0){

        sortear.style.display = 'none';
    }

}
