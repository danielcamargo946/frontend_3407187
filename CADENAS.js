// 1. Sintaxis básica

let nombre = "Daniel";
let edad = 18;

console.log("Hola " + nombre + ", tienes " + edad + " años.");
console.log(`Hola ${nombre}, tienes ${edad} años.`);


// 2. Interpolación
let producto = "Laptop";
let precio = 3500000;

console.log(`El producto es ${producto} y cuesta $${precio}.`);


// 3. Expresiones
let a = 10;
let b = 5;

console.log(`La suma es ${a + b}`);
console.log(`La multiplicación es ${a * b}`);
console.log(`El doble de ${a} es ${a * 2}`);


// 4. Funciones
let nombre2 = "daniel";

console.log(`Nombre en mayúsculas: ${nombre2.toUpperCase()}`);
console.log(`Cantidad de letras: ${nombre2.length}`);


// 5. Cadenas múltiples
let mensaje = `
Bienvenido al sistema.
Seleccione una opción:
1. Registrar
2. Consultar
3. Salir
`;

console.log(mensaje);


// 6. HTML dinámico
let usuario = "Daniel";
let edad2 = 18;

let htmlUsuario = `
<div class="card">
    <h2>${usuario}</h2>
    <p>Edad: ${edad2}</p>
</div>
`;

console.log(htmlUsuario);


// 7. Listas
let frutas = ["Manzana", "Pera", "Mango"];

let lista = `
<ul>
${frutas.map(fruta => `<li>${fruta}</li>`).join("")}
</ul>
`;

console.log(lista);


// 8. Objetos
let persona = {
    nombre: "Daniel",
    edad: 18,
    ciudad: "Bogotá"
};

console.log(`
Nombre: ${persona.nombre}
Edad: ${persona.edad}
Ciudad: ${persona.ciudad}
`);


// 9. Mensaje dinámico
let usuario2 = "Daniel";
let totalCompra = 150000;

console.log(`Hola ${usuario2}, el valor total de su compra es $${totalCompra}.`);


// 10. Condición
let edad3 = 18;

console.log(`
El usuario es ${edad3 >= 18 ? "Mayor de edad" : "Menor de edad"}.
`);


// 11. Loops
let numeros = [1, 2, 3, 4, 5];

let resultado = `
${numeros.map(numero => `Número: ${numero}`).join("\n")}
`;

console.log(resultado);


// 12. Tagged Template Literal
function resaltar(textos, ...valores) {
    return textos.reduce((resultado, texto, i) => {
        return resultado + texto + (valores[i] ? `**${valores[i]}**` : "");
    }, "");
}

let nombre3 = "Daniel";

console.log(resaltar`Hola ${nombre3}, bienvenido.`);
