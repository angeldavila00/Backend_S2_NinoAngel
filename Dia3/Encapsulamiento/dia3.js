/* Significa ocultar los detalles internos de un objeto y exponer solo lo necesario.
En javascript se logra con propiedades privadas(#) y metodos publicos*/

class usuario{
    #nombre;
    #edad;
    constructor (nombre,edad){
        this.#nombre =nombre;
        this.#edad=edad
    }

    //contructor vacio
    constructor(){}
}