const adicionar = document.getElementById("adicionar");

adicionar.onclick = function(){

    let clone = document.querySelector('.campo').cloneNode(true);
    console.log(clone);
    let destino = document.getElementById('sorteio');
    clone.setAttribute(name, 'teste');
    destino.appendChild(clone);



}