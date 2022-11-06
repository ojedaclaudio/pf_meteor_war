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
    alert("Atento soldado " + jugador + "," + " " + "tu nave " + nave + " esta en mantenimiento. Nos falta pintura Roja.");
    colorNave = 'roja';
} else if(colorNave== "2"){
    alert("Atento soldado " + jugador + "," + " " + "tu nave " + nave + " esta en mantenimiento. Nos falta pintura Azul.");
    colorNave = "azul";
} else  if(colorNave== "3"){
    alert("Atento soldado " + jugador + "," + " " + "tu nave " + nave + " esta en mantenimiento. Nos falta pintura Verde.");
    colorNave = 'verde';
} else{
    alert("Algo salio mal, por favor vuelve a recargar la pagina.");
};

//OBJETOS Y ARRAYS
function datosJugador (nombre, nave, colorNave){
    this.nombre = nombre;
    this.nave = nave;
    this.colorNave = colorNave;
};
const player = new datosJugador (jugador, nave, colorNave);
console.log(player.nombre);
console.log(player.nave);
console.log(player.colorNave);

const naveColor = [
    {color: 'roja', diseno: 'archivo del diseno'},
    {color:'verde', diseno: 'archivo del diseno'},
    {color: 'azul', diseno: 'archivo del diseno'},
]; //En esta array van a ir los 3 distintos disenos de la nave dependiendo el color

//Find y Filter
//Esto son solo pruebas, ya que no se me ocurria una forma de meter este metodo en mi proyecto por el momento.
const test1 = naveColor.find((el) => el.color === "roja")
const test2 = naveColor.find((el) => el.color === 'negro')

console.log(test1);
console.log(test2);

const test3 = naveColor.filter((el) => el.diseno.includes("archivo"));
const test4 = naveColor.filter((el) => el.color.includes("negro"));
console.log(test3);
console.log(test4);