# Práctica de programación (post Scratch)

App educativa para **practicar conceptos de programación** leyendo pseudocódigo en
castellano — el puente de Scratch al texto. Educación Informática, secundaria con
orientación en turismo (Villa La Angostura, Neuquén).

Un único `index.html`: todo corre en el navegador, sin servidor, sin internet y sin
dependencias. Se abre con doble clic o se comparte por link.

**En vivo:** https://ysyry.github.io/practicas-programacion-post-scratch/

---

## Cada curso entra a lo suyo

Al abrir, la app pide **año, nombre y fecha**. Según el año elegido muestra un menú
distinto. Una sala puede estar en más de un año (el registro guarda de qué año viene
cada resultado, así que no se mezclan).

| Año | Recorrido | Contenido |
|---|---|---|
| **1ro** — Empezar a programar | 5 salas · 27 ejercicios | Intro a la robótica · Modo Jr · Ordená el código · Algoritmos · ¿Cuántas veces? · Dibujar con código · Estudio de dibujo · Teoría · Mezcla |
| **2do** — Programas de verdad | Taller de robótica (4 unidades) + 14 salas · 95 ejercicios | Repaso y lectura · Datos y cuentas · Repetir y decidir · Programas enteros · Crear con código · Probate |
| **3ro** — Del programa al aparato | 9 salas · 85 ejercicios | Poner a punto · Del programa al aparato · Resolver problemas · Probate |

**1ro no ve variables ni operadores** (no los dio). Sus salas están filtradas: solo
aparecen los ejercicios marcados con `a1:true`. El Modo mezcla también respeta el año.

Para mover una sala de año se edita la constante **`ANIOS`** en `index.html`.

---

## Taller de robótica por unidades (2do)

2do tiene, arriba de todo, un **taller de 4 unidades**. Cada unidad tiene tres partes,
en orden:

| | Qué es |
|---|---|
| **Teoría** | Slides para leer de corrido, con navegación adelante/atrás. Mismo formato que la intro de 1ro. La última lleva directo a los ejercicios. |
| **Ejercicios** | Los ejercicios de esa unidad. Modo práctica: explicación, pista y reintento. |
| **Integrador** | Los ejercicios propios de la unidad **más una muestra de todas las unidades anteriores**, y **sin revelar la respuesta**. Para ver si de verdad les sale. |

| Unidad | Teoría | Ejercicios |
|---|---|---|
| 1 · Sentir, decidir, hacer | 5 pantallas | 7 |
| 2 · Elegir y ubicar el sensor | 4 pantallas | 8 |
| 3 · Decidir con un número (umbral) | 4 pantallas | 10 |
| 4 · El programa completo | 4 pantallas | 7 |

Los 32 ejercicios salen de las salas `robot1` y `sensores`, repartidos con el campo
**`u:`** de cada ejercicio. Para agregar una unidad: sumá una entrada en `TALLERES` y
marcá ejercicios con el `u:` que le corresponda.

---

## Saber qué entendieron de verdad

El problema: en modo práctica se dan muchas ayudas (explicación al fallar, pista,
reintento ilimitado). Casi todos terminan con puntaje alto, y eso **no dice si
entendieron**.

Por eso la app registra siempre **dos números distintos**:

- **Practicó** — cuántas resolvió, contando reintentos y ayudas.
- **Sin ayuda** — cuántas le salieron **bien al primer intento**. Este es el número
  que importa.

Al terminar una tanda, el alumno ve los dos. La docente los ve en el panel y en la
planilla. Ejemplo real de una clase:

| Alumno | Practicó | Sin ayuda |
|---|---|---|
| Ana Torres | 7/7 | **6/7** |
| Bruno Díaz | 7/7 | **3/7** |
| Cami Ruiz | 7/7 | **1/7** |

Los tres "aprobaron" practicando. La segunda columna dice la verdad.

También se registra por ejercicio: intentos, pistas pedidas, si lo salteó y segundos.

### Ronda que cuenta

Botón arriba del menú. Cambia el flujo para una evaluación:

- un solo intento por ejercicio
- sin explicación, sin pista, sin reintento
- queda marcada aparte en la planilla (columna **Modo**)

Se activa y se desactiva en el momento. Sirve para tomar una evaluación corta con la
misma herramienta con la que practican.

---

## La planilla

**Panel docente** → `Descargar planilla Excel`. Genera un `.xlsx` de verdad
(sin librerías, sin internet) con seis solapas:

| Solapa | Qué trae |
|---|---|
| **1ro**, **2do**, **3ro** | Una fila por tanda: fecha, alumno, sala, modo, practicó, sin ayuda, %, pistas, salteadas, minutos |
| **Por alumno** | Consolidado de cada uno: total de ejercicios, % sin ayuda, pistas, última vez |
| **Por concepto** | **Dónde se traba el curso.** Ordenado de peor a mejor % sin ayuda |
| **Detalle** | Una fila por ejercicio: consigna, intentos, si le salió sin ayuda, pistas, segundos |

Las fechas van como fecha real de Excel (se filtran y ordenan).

### Cómo entrar al panel

Botón gris **"· panel docente ·"** al pie del menú, o agregando `#docente` a la URL.
Pide una clave: **`profe`**. Se cambia en la constante `CLAVE_DOCENTE` de `index.html`.

### Juntar todo en una sola planilla

Cada máquina guarda lo suyo en su navegador. Hay dos formas de que todo termine
junto en la planilla de la docente, sin pasar por las PC de los alumnos.

**A · Envío automático al Drive de la escuela (recomendado)**

Cada tanda se manda sola a una planilla de Google apenas termina. Si en ese momento
no hay internet, queda en cola y se reintenta al abrir la app o al terminar la
siguiente: no se pierde nada.

Configuración, una sola vez (5 minutos): seguí los pasos de **`buzon-apps-script.gs`**
y pegá la URL que te da Google en la constante `URL_BUZON` de `index.html`.

Mientras `URL_BUZON` esté vacía la app funciona igual, solo que sin enviar.

**B · Códigos que pegan los alumnos (sin configurar nada)**

1. Al terminar, el alumno toca **“Copiar mi resultado”** y lo pega donde le digas
   (Classroom, un documento compartido).
2. Vos copiás todos esos códigos juntos y en el panel usás
   **“Pegar códigos de los alumnos”**. Los separa solos y descarta repetidos.
3. Descargás la planilla.

**C · Respaldo `.json`** — sigue estando, para mover datos entre máquinas propias.

### Privacidad

Todo queda en el `localStorage` de cada máquina. **La app no manda nada a ningún
servidor y no usa internet.** Se lo dice al alumno en la pantalla de entrada.

Al abrir un día distinto, la app vuelve a pedir quién es (las PC se comparten entre
cursos). Hay un "no soy yo" siempre visible.

---

## Cómo está organizado el resto

Las salas se agrupan en módulos, y cada una lleva un nivel (inicial, intermedio,
avanzado). Tipos de ejercicio: `order` (armar el programa), `mc` (opción múltiple),
`fill` (completar el hueco), `bug` (encontrar la línea con el error).

Cada ejercicio es autocorregido y da una explicación. En modo práctica podés corregir
y reintentar en el momento.

### Modo Jr (accesibilidad / DUA)

Nivel ScratchJr para estudiantes que necesitan una entrada más simple. **Sin texto y
sin audio** (la escuela no tiene parlantes): la consigna es visual y se arma una
secuencia de flechas grandes para llevar al personaje hasta su objetivo. Sin puntaje
ni presión de tiempo, y el personaje nunca se cae del tablero. 9 misiones.

Es el único lugar donde los emojis son deliberados: ahí son el contenido.

### Escenario animado

Después de responder, un escenario **ejecuta el código**: el personaje se mueve o
dibuja en un canvas, un panel muestra cómo cambian las variables paso a paso y una
pantalla muestra la salida. Controles: ejecutar, paso a paso, reiniciar.

El pseudocódigo soporta movimiento (`avanzar` / `girar` / `rebotar`), variables y
asignaciones, operadores `+ - * / %` con precedencia y paréntesis, comparaciones,
lógicos (`y` `o` `no`), `repetir N veces:` y `si… sino:` anidados.

---

## Extender

Todo está en `index.html`:

| Constante | Qué controla |
|---|---|
| `SALAS` | El banco de ejercicios. Cada ejercicio es un objeto con `type`, `consigna`, `explica` y sus datos. |
| `ANIOS` | Qué salas ve cada año y cómo se agrupan. |
| `TALLERES` | Las unidades con slides + ejercicios + integrador (hoy solo 2do). |
| `NIVEL` | El nivel que se muestra en cada sala. |
| `CLAVE_DOCENTE` | La clave del panel. |

Marcas en los ejercicios: `a1:true` = apto para 1ro · `u:N` = unidad del taller.

---

Hecho para el aula. Software libre.
