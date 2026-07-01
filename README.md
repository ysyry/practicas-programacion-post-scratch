# Práctica de programación (post Scratch) 🚀

App educativa para **practicar conceptos de programación** leyendo pseudocódigo en
castellano — el puente de Scratch al texto. Educación Informática, secundaria con
orientación en turismo (Villa La Angostura, Neuquén).

Se usa en **1er y 2do año**: los pibes ya trabajaron los conceptos en Scratch
(laberinto, juego Atrapa, marcador, vidas) y acá los reconocen y practican en otra
representación, **nombrando cada concepto**. Se le van **agregando salas** a medida
que avanzan los cursos (mismo link para todos).

## Salas (una por concepto)

| Sala | Concepto | Qué practican |
|------|----------|---------------|
| 🧩 Ordená el código | **Secuencia** | Poner instrucciones en orden (Parsons) |
| 🔁 ¿Cuántas veces? | **Bucle** | Contar repeticiones y su efecto |
| 🔀 Completá el hueco | **Condicional** | Elegir la condición / bloque `si… entonces` |
| 📦 Seguí la variable | **Variables y traza** | Seguir el valor que queda en una variable |
| 🐞 Cazá el error | **Debugging** | Encontrar la línea equivocada |
| 🎲 Modo Mezcla | Todos | Desafío final con ejercicios mezclados |

Cada ejercicio muestra el nombre del concepto, es **autocorregido** y da una
**explicación** al responder. Puntaje, racha y medallas (oro/plata/bronce).

## Cómo se usa

- Es un único `index.html`: todo corre en el navegador, sin servidor ni internet.
- Se abre con doble clic, o se comparte por link una vez publicado.

## En vivo

https://ysyry.github.io/practicas-programacion-post-scratch/

## Extender (agregar salas para 2do)

El banco de ejercicios está en la constante `SALAS` dentro de `index.html`.
Cada ejercicio es un objeto con `type` (`order` | `mc` | `fill` | `bug`),
`consigna`, `explica` y los datos propios del tipo. Agregar ejercicios o una
sala nueva = sumar objetos/entradas al array `SALAS`.

---
Hecho para el aula. Software libre.
