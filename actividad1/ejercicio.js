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
/**Explicacion
 * Oculta los datos internos de un objeto y solo permite acceder a ellos mediante metodos.
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

    retirar(monto){
        if (monto<= this.#saldo){
            this.#saldo -= monto;
        } else{
            console.log("Fondos insuficientes")
        }
    }

    consultarSaldo(){
        return this.#saldo;
    }
}
const cuenta = new cuentaBancaria(100);
cuenta.depositar(50);
console.log(cuenta.consultarSaldo()); //150
//#saldo está protegido y no puede manipularse directamente desde fuera.


//Abstraccion
/**Nos enfocamos en qué hace un objeto y no en cómo lo hace.
Se crean clases base que definen comportamientos, y cada clase concreta los implementa.
 */