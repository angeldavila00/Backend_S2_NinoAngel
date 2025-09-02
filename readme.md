# Definición

La **POO** es un paradigma de programación que organiza el código en
**objetos**, los cuales representan entidades del mundo real o
abstracto.\
Cada objeto combina **datos** (atributos/propiedades) y **funciones**
(métodos/comportamientos).

------------------------------------------------------------------------

# Principios fundamentales

## Encapsulamiento

-   Agrupar atributos y métodos dentro de una clase.\
-   Ocultar detalles internos y exponer solo lo necesario.\
-   **Ejemplo:** un objeto `Coche` tiene un método `arrancar()` sin
    necesidad de mostrar cómo funciona el motor.

## Abstracción

-   Enfocarse en lo esencial, ignorando lo irrelevante.\
-   Permite crear modelos simples de sistemas complejos.\
-   **Ejemplo:** un `Usuario` con nombre y contraseña, sin necesidad de
    modelar todos sus posibles datos.

## Herencia

-   Crear nuevas clases basadas en otras existentes.\
-   Reutilización de código.\
-   **Ejemplo:** una clase `Perro` puede heredar de `Animal`.

## Polimorfismo

-   Un mismo método puede comportarse de distintas maneras según el
    contexto.\
-   **Ejemplo:** el método `hacerSonido()` puede devolver `"Ladrar"` en
    un `Perro` y `"Maullar"` en un `Gato`.