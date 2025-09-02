// Clases y Constructor

class person {
    name;
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hola, Soy ${this.name}`);
    }
}

const gil = new person("Gil");

gil.introduceSelf(); // Hola, soy Gil

//Encapsulamiento
/** Oculta los datos internos de un objeto y solo permite acceder a ellos mediante metodos.
 * En javaScript se usa # (Private fields) o convenciones
 */

class cuentaBancaria {
    #saldo; // atributo privado

    constructor(saldo) {
        this.#saldo = saldo;
    }
    depositar(monto) {
        this.#saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.#saldo) {
            this.#saldo -= monto;
        } else {
            console.log("Fondos insuficientes")
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}
const cuenta = new cuentaBancaria(100);
cuenta.depositar(50);
console.log(cuenta.consultarSaldo()); //150
//#saldo está protegido y no puede manipularse directamente desde fuera.


//Abstraccion
/**Nos enfocamos en qué hace un objeto y no en cómo lo hace.
Se crean clases base que definen comportamientos, y cada clase concreta los implementa.*/

class coche {
    arrancar() {
        console.log("El coche esta arrancando");
    }
};

const miCoche = new coche();
miCoche.arrancar();

//Herencia
/**Permite que una clase hija herede atributos y métodos de una clase padre, evitando duplicar código.*/

//Una clase puede heredar de otra.

class animal {
    hacerSonido() {
        console.log("Este animal hace un sonido...Primer ejemplo");
    }
}

class perro extends animal {
    constructor(ladra){
        super(ladra)
        console.log("Guau  nn Guau");
    }  
}

class gato extends animal {
    maulla(){
    console.log("Miua Miau ")
    }
}

const miPerro = new perro();
miPerro.hacerSonido();

const miGato = new gato();
miGato.hacerSonido();
miGato.maulla();
//Polimorfismo
/**Un mismo método puede comportarse de manera diferente según el objeto que lo use.*/

//El mismo método se comporta diferente según el objeto.

class Animal {
    hacerSonido() {
        console.log("Sonido de animal...");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("¡Guau Guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("¡Miau Miau!");
    }
}

class Vaca extends Animal {
    hacerSonido(){
        console.log("Muuuuu...")
    }
}

const animalitos = [new Perro(), new Gato(), new Vaca()];



// Recorremos el array y cada animal hace su sonido
animalitos.forEach(animal => animal.hacerSonido());

//demuestra polimorfismo, porque el mismo método hacerSonido() se comporta distinto según el objeto (Perro o Gato).

/**Metodo Instancia
 * Cuando la acción depende de los datos de un objeto en particular.
 * Ejemplo, miPerro.hacerSonido() depende del nombre de ese perro.
 */

//Metodo estatico 
/**Cuando la acción es general y no depende de un objeto.
 * Ejemplo, una función que da información sobre la especie, o convierte datos.
 */

//objeto.metodo() = métodos de instancia necesita (new)
//Clase.metodo() = métodos estaticos (no necesita new)