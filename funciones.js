//funcion tradicional
function saludar (nombre) {
    console.log("Hola" + nombre)
}
saludar("daniel")

//funcion con metodo
const persona ={
    nombre:"daniel",
    saludar() {
        return "Hola "+this.nombre
    }
}
console.log(persona.saludar())

//funcion flecha
const multiplicar = (a, b) =>{
    return a * b
}
console.log(multiplicar(9,3))

//funcion tipo expresion:
const restar = function (a, b){
    return a * b
}
console.log(restar(50, 10))

//llamado de funcion antes de definir
console.log(sumar(3,5))
function sumar (a, b){
    return a + b
}

//funcion constructora
function Persona(nombre, edad){

    this.nombre = nombre
    this.edad = edad
}
const usuario = new Persona("juan", 30)
console.log(usuario.nombre, usuario.edad)

//funcion anonima
setTimeout(function(){
    console.log("ejecutando despues de 2 segundos");
}, 2000);

//ambito de las variables
/*function ejemplo() {
    let mensaje = "Hola";
}
console.log(mensaje);*/
