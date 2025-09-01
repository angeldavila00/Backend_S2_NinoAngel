let nombres = { 
    nombre: "Juan",
    apellido: "Perez"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("segNombre"));
//Resultado esperado:
//Juan
//False

console.log(nombres);

/*Modificando la propiedad <prototype>
Esta propiedad se puede modificar, indicando explícitamente que debería referirse a otro prototipo. Se utilizan los siguientes métodos para lograr esto: */

function perro (nombre,edad) {
    let perro = Object.create(ObjectConstructor);
    perro.nombre = nombre;
    perro.edad = edad;

    return perro;
}

let ObjectConstructor = {
    habla: function(){
        return "¡Soy un perro!"
    }
}

let firulais = perro("Firulais", 9);

console.log(firulais);

// Class 
class animales {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    habla() {
        return "¡Soy un perro!";
    }
}


let bongo = new animales ("Bongo", "Peludo");
console.log(bongo)


