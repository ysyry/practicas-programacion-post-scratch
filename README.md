# Práctica de programación (post Scratch) 🚀

App educativa para **practicar conceptos de programación** leyendo pseudocódigo en
castellano — el puente de Scratch al texto. Educación Informática, secundaria con
orientación en turismo (Villa La Angostura, Neuquén).

Se usa en **1er y 2do año**: los pibes ya trabajaron los conceptos en Scratch
(laberinto, juego Atrapa, marcador, vidas) y acá los reconocen y practican en otra
representación, **nombrando cada concepto**. Se le van **agregando salas** a medida
que avanzan los cursos (mismo link para todos).

## Introducción: ¿Qué es un robot? 🤖

Antes de las salas de ejercicios hay una **introducción de 11 pantallas** para 1er año, con
navegación adelante/atrás y puntitos para saltar. Cuenta de qué se trata todo esto antes de
mandarlos a practicar: qué es un robot (se entera, decide, hace), que el bloque *"si tocando
color negro"* del laberinto **ya era un sensor**, qué son sensores y actuadores, hardware y
software, una línea de tiempo simple de Herón a hoy, tres curiosidades y robots cotidianos
que no parecen robots.

Sin tecnicismos: no menciona voltajes, pines ni Arduino. Eso queda para 3ro.

## Cómo está organizado

Las salas están agrupadas en **módulos temáticos**, y cada una lleva un **nivel**
(inicial, intermedio o avanzado):

| Módulo | Salas |
|---|---|
| Para arrancar | Introducción a la robótica · Modo Jr |
| 1 · Fundamentos | Ordená el código · Algoritmos · Diagramas de flujo |
| 2 · Datos y cuentas | Operadores y números · Tipos de datos · Seguí la variable |
| 3 · Repetir y decidir | ¿Cuántas veces? · Completá el hueco · Decisiones |
| 4 · Programas enteros | Mini programas · Cazá el error |
| 5 · Del programa al aparato | Robots: sentir y decidir · Sensores y aparatos |
| 6 · Crear con código | Dibujar con código · Estudio de dibujo |
| Poner a prueba | Teoría · Repaso final · Situacionales · Desafíos · Más desafíos · Modo mezcla |

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
