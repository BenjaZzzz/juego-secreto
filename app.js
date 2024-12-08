let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    //console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    console.log(intentos);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        } else{
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        // Si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario'); 
   valorCaja.value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // Generar numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales(); 
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

console.log(numeroSecreto);
/*function preguntaClickUsuario(){
    let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Indica un numero entre 1 y 10';    
}*/

asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');
