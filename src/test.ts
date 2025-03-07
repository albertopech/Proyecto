console.log("Hello World");

// Agregar una función básica
function saludar(nombre: string): void {
    console.log(`¡Hola ${nombre}!`);
}

// Crear un array y recorrerlo
const nombres: string[] = ['María', 'Juan', 'Ana'];
nombres.forEach(nombre => {
    saludar(nombre);
});

// Ejemplo de una clase simple
class Persona {
    constructor(private nombre: string, private edad: number) {}
    
    presentarse(): void {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

// Crear y usar una instancia de la clase
const persona = new Persona('Carlos', 25);
persona.presentarse();