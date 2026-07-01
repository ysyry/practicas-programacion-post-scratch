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
| 🧭 Algoritmos | **Algoritmo / programa** | Qué es un algoritmo y un programa + ordenar pasos |
| 🔷 Diagramas de flujo | **Diagrama de flujo** | Leer algoritmos dibujados (óvalo/rectángulo/rombo/flecha) |
| ➗ Operadores y números | **Operadores / matemática** | Cuentas, división, resto `%`, par/impar, precedencia |
| 🏷️ Tipos de datos | **Tipos de datos** | Entero, decimal, texto, booleano |
| 🔁 ¿Cuántas veces? | **Bucle** | Contar repeticiones y qué dibuja |
| 🔀 Completá el hueco | **Condicional** | Elegir la condición / bloque `si… entonces` |
| 🧠 Decisiones | **Condicionales complejos** | Anidados y con `y` / `o` |
| 📦 Seguí la variable | **Variables y traza** | Seguir el valor que queda en una variable |
| 🐞 Cazá el error | **Debugging** | Encontrar la línea equivocada |
| 🎲 Modo Mezcla | Todos | Desafío final con ejercicios mezclados |

Cada ejercicio muestra el nombre del concepto, es **autocorregido** y da una
**explicación** al responder. Si te equivocás, podés **corregir y reintentar** en el
momento (la explicación conceptual queda a la vista). Puntaje, racha y medallas.

Se refuerza la idea de que **lo que se escribe es un programa** que la computadora
ejecuta línea por línea (se ve en el escenario animado).

## Escenario animado 🎬

Después de responder (o al probar tu orden en "Ordená"), un **escenario** ejecuta el
código: un personaje se mueve/dibuja en un canvas, un **panel de variables** muestra
cómo cambian los valores paso a paso, y una **pantalla** muestra la salida. Controles:
▶ Ejecutar, ⏭ Paso, ↺ reiniciar. Sirve para *ver* qué hace el código, no solo leerlo.

El pseudocódigo soporta: `avanzar` / `girar` / `rebotar` (movimiento), variables y
asignaciones, operadores `+ - * / %` con precedencia y paréntesis, comparaciones
(`> < >= <= = distinto`), lógicos (`y` `o` `no`), `repetir N veces:` y `si… sino:`
(incluso anidados).

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
