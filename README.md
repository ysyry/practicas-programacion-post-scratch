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
| 🎨 Dibujar con código | **Arte generativo** | Programar figuras (triángulo, estrella, hexágono) |
| 🔀 Completá el hueco | **Condicional** | Elegir la condición / bloque `si… entonces` |
| 🤖 Robots: sentir y decidir | **Sensores y decisiones** | Qué se entera y qué hace un aparato (introductorio, sin cuentas) |
| 🧠 Decisiones | **Condicionales complejos** | Anidados y con `y` / `o` |
| 📦 Seguí la variable | **Variables y traza** | Seguir el valor que queda en una variable |
| 🧩 Mini programas | **Variables + condicionales** | Leer/armar programas reales + desafíos situacionales |
| 🐞 Cazá el error | **Debugging** | Encontrar la línea equivocada |
| 🌡️ Sensores y aparatos | **Entrada, decisión y salida** | Leer un sensor, convertirlo y decidir qué hacer (puente hacia Arduino) |
| 🔥 Desafíos | **Combinar todo** | 8 ejercicios (bucles anidados, acumuladores…) |
| 🔥 Desafíos Nivel 2 | **Nivel 2 (2do)** | 14 ejercicios más largos, dificultad creciente |
| 🏁 Repaso final | **Repaso general** | Un poco de todo, en orden de dificultad |
| 🎈 Jr | Nivel ScratchJr (accesible) | Llevar al personaje al objetivo con flechas grandes, sin texto |
| 🎨 Estudio de dibujo | Modo libre | Perillas (repetición/largo/giro) → la tortuga dibuja en vivo |
| 🎲 Modo Mezcla | Todos | Desafío final con ejercicios mezclados |

### Sala "Robots: sentir y decidir" 🤖

Veinte ejercicios **introductorios**, pensados para 1er año, sin una sola cuenta. Arrancan
desde algo que ya hicieron: el bloque *"si tocando color negro"* del laberinto **ya era un
sensor**. Desde ahí: qué se entera (sensor) y qué hace (actuador), los tres pasos de todo
aparato, elegir el sensor adecuado para un problema, escribir la decisión con `si… sino`,
el `y` que exige dos condiciones, por qué un aparato vive adentro de un *"por siempre"*,
el sensor bien elegido pero mal ubicado, la sangría que deja una línea afuera de la
decisión, y el cierre: mismo aparato con distinto programa es otra cosa.

### Sala "Sensores y aparatos" 🌡️

Doce ejercicios que llevan lo aprendido en Scratch hacia el mundo físico, de fácil a difícil:
qué hace un sensor, digital vs analógico, leer un valor entre 0 y 1023, escribir la condición
que decide, convertirlo a porcentaje (que es una función lineal), ordenar los cuatro pasos de
cualquier aparato (sensar, convertir, decidir, actuar), encontrar la condición invertida en un
regador, seguir un semáforo con tres casos, cazar el "sino" que falta, trazar un bucle con
contador, y cerrar con la idea central: mismo hardware más distinto programa igual a otro aparato.

No necesita placa ni hardware: se resuelve en el navegador como el resto de las salas.

Cada ejercicio muestra el nombre del concepto, es **autocorregido** y da una
**explicación** al responder. Si te equivocás, podés **corregir y reintentar** en el
momento (la explicación conceptual queda a la vista). Puntaje, racha y medallas.

Se refuerza la idea de que **lo que se escribe es un programa** que la computadora
ejecuta línea por línea (se ve en el escenario animado).

## Modo Jr (accesibilidad / DUA) 🎈

Nivel ScratchJr para estudiantes que necesitan una entrada más simple (p. ej. una
alumna con síndrome de Down). **Sin texto para leer y sin audio** (la escuela no tiene
parlantes): la consigna es puramente visual (`personaje ➡️ objetivo`) y el objetivo
también se ve en la grilla. Se arma una secuencia de **flechas grandes** (⬆️➡️⬇️⬅️)
para llevar al personaje hasta su objetivo. Botones grandes, refuerzo con emojis
(🎉🌟👏), sin puntaje ni presión de tiempo, y el personaje nunca se cae del tablero.
4 misiones de dificultad creciente.

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
