//VARIABLES INICIALES
let jugador
let nave
let colorNave

//LOGIN
jugador = prompt('Bienvenido a Meteor WAR! Por favor, escoje el nombre de usuario:');


function login(dato) {
    while((dato == "")||(dato == " ")||(dato == null)){
        dato = prompt("Por favor, escoje un nombre valido");
    }
}
login(jugador)

nave = prompt('Hola' + " " + jugador + "! " + 'por favor escoje el nombre de tu nave:');
login(nave)

colorNave = prompt("Escoje el numero para el color de tu nave" + " " + nave + ":\n 1. Rojo \n 2. Azul \n 3. Verde");

while((colorNave != "1")&&(colorNave != "2")&&(colorNave != "3")){
    colorNave = prompt("Por favor, escoje un numero de la lista:\n 1. Rojo \n 2. Azul \n 3. Verde");
}

if(colorNave== "1"){
    alert("Atento soldado " + jugador + "," + " " + "tu nave " + nave + " esta en mantenimiento. Nos falta pintura Roja.")
} else if(colorNave== "2"){
    alert("Atento soldado " + jugador + "," + " " + "tu nave " + nave + " esta en mantenimiento. Nos falta pintura Azul.")
} else  if(colorNave== "3"){
    alert("Atento soldado " + jugador + "," + " " + "tu nave " + nave + " esta en mantenimiento. Nos falta pintura Verde.")
} else{
    alert("Algo salio mal, por favor vuelve a recargar la pagina.")
}