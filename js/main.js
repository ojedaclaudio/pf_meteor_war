let login = document.getElementsByClassName('login');
let nave
let jugador
let userInput = document.getElementById('userInput')
let colorNave = document.getElementsByClassName('colorNave')
let form = document.getElementById('form')
let colorCkd
let jugadorCkd
let naveCkd
let test = 'test'
let score = 0

//LOGIN
//LOGIN USUARIO

console.log(userInput);
console.log(login);
console.log(colorNave);
login[0].innerText = "Bienvenido a Meteor WAR! Por favor, escoge el nombre de usuario"
login[1].setAttribute('onclick', 'userName()')
function userName() {
    jugador = document.getElementById("userInput").value;
    if((jugador == "")||(jugador == " ")||(jugador == null)){
        login[2].innerText = "Por favor, escoge un nombre valido"
    }else{
        login[2].innerText = "" 
        login[0].innerText = 'Hola' + " " + jugador + "! " + 'Por favor escoje el nombre de tu nave:'
        login[1].setAttribute('onclick', 'naveName()');
        nave = "ok";
        jugadorCkd = 'ok';
    }
}
//LOGIN NAVE

/* function naveColor(i, color){
    cardNaves[i].setAttribute('src','./assets/img/nave_'+ color +'.png')
}; */

let cardNaves = document.getElementsByTagName('img');
console.log(cardNaves);
let btnRed = document.createElement("button")
btnRed.innerHTML = 'ROJO';
let btnBlue = document.createElement("button")
btnBlue.innerHTML = 'AZUL';
let btnGreen = document.createElement("button")
btnGreen.innerHTML = 'VERDE';

function naveName() {
    nave = document.getElementById("userInput").value;
    if((nave == "")||(nave == " ")||(nave == null)){
        login[2].innerText = "Por favor, escoge un nombre valido"
    }else{
        login[2].innerText = "" 
        login[2].remove()
        userInput.remove();
        login[1].remove()
        login[0].innerText = "Escoge el color para tu nave" + " " + nave
        cardNaves[0].setAttribute('src','./assets/img/nave_red.png')
        colorNave[0].appendChild(btnRed);
        btnRed.className='btn-danger btn-color';
        cardNaves[1].setAttribute('src','./assets/img/nave_green.png')
        colorNave[1].appendChild(btnGreen);
        btnGreen.className='btn-success btn-color';
        cardNaves[2].setAttribute('src','./assets/img/nave_blue.png')
        colorNave[2].appendChild(btnBlue);
        btnBlue.className='btn-primary btn-color'
        naveCkd = 'ok';
    }
}
if(nave=="ok"){
    naveName()
}
//LISTENER ELECCION DE NAVE
let eleccionColor
function eliminarLogin(){
    btnBlue.remove()
    btnGreen.remove()
    btnRed.remove()
    form.remove();
}
btnRed.addEventListener("click", ()=>{
    eliminarLogin()
    eleccionColor = 'red';
    colorCkd = 'ok'
    player1 = new Player (jugador, nave, eleccionColor, score);
    datosJSON()
    cardNaves[4].setAttribute('src','./assets/img/nave_red.png')
    proximamente[0].innerText = 'PROXIMAMENTE'
    proximamente[0].className = 'proximamente animate__heartBeat animate__animated animate__bounce animate__infinite'
});
btnGreen.addEventListener("click", ()=>{
    eliminarLogin()
    eleccionColor = 'green';
    colorCkd = 'ok'
    player1 = new Player (jugador, nave, eleccionColor, score);
    datosJSON()
    cardNaves[4].setAttribute('src','./assets/img/nave_green.png')
    proximamente[0].innerText = 'PROXIMAMENTE'
    proximamente[0].className = 'proximamente animate__heartBeat animate__animated animate__bounce animate__infinite'
});
btnBlue.addEventListener("click", ()=>{
    eliminarLogin()
    eleccionColor = 'blue';
    colorCkd = 'ok'
    player1 = new Player (jugador, nave, eleccionColor, score);
    datosJSON()
    cardNaves[4].setAttribute('src','./assets/img/nave_blue.png')
    proximamente[0].innerText = 'PROXIMAMENTE'
    proximamente[0].className = 'proximamente animate__heartBeat animate__animated animate__bounce animate__infinite'
});
//STORAGE
let player1

function Player (nombreJugador, nombreNave, colorNave, scoreInicial){
    this.nombreJugador = nombreJugador;
    this.nombreNave = nombreNave;
    this.colorNave = colorNave;
    this.scoreInicial = scoreInicial;
};
function datosJSON(){
    playerJSON = JSON.stringify(player1);
    localStorage.setItem("datosJugador", playerJSON);
}

//////////////MAIN JUEGO
let proximamente = document.getElementsByClassName('proximamente')
let main = document.getElementsByTagName('main')
if(colorCkd == 'ok'){
    cardNaves[4].setAttribute('src','./assets/img/nave_green.png')
}