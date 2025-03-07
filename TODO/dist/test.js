console.log("Hello World");
// Agregar una función básica
function saludar(nombre) {
    console.log(`¡Hola ${nombre}!`);
}
// Crear un array y recorrerlo
const nombres = ['María', 'Juan', 'Ana'];
nombres.forEach(nombre => {
    saludar(nombre);
});
// Ejemplo de una clase simple
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}
// Crear y usar una instancia de la clase
const persona = new Persona('Carlos', 25);
persona.presentarse();
