function como_funciona(input){
    alert ("Busca a tus amigos y reparte a traves de nuestra pagina abrazos a todos.")
}



let horacio_abrazo = document.querySelector ("#horacio_abrazo");
let aureliano_abrazo = document.querySelector ("#aureliano_abrazo");
let ricardo_abrazo = document.querySelector ("#ricardo_abrazo");

let cont1 = 3;
let cont2 = 2;
let cont3 = 6;


function contador1(){
    cont1 ++;
    horacio_abrazo.innerText = cont1 + "abrazo(s)";
}

function contador2(){
    cont2 ++;
    aureliano_abrazo.innerText = cont2 + "abrazo(s)";
}

function contador3(){
    cont3 ++;
    ricardo_abrazo.innerText = cont3 + "abrazo(s)";
}



function eliminar (input){
    input.remove();
}