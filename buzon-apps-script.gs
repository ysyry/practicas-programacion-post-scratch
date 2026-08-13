/**
 * BUZÓN DE RESULTADOS — Práctica de programación
 * Recibe los resultados de todas las máquinas y los va escribiendo
 * en una sola planilla del Drive de la escuela.
 *
 * ─────────────────────────────────────────────────────────────
 * CÓMO PONERLO A ANDAR (5 minutos, una sola vez)
 * ─────────────────────────────────────────────────────────────
 *
 *  1. Entrá a drive.google.com con la cuenta de la escuela y creá
 *     una planilla nueva. Ponele de nombre, por ejemplo:
 *     "Resultados práctica de programación".
 *
 *  2. En esa planilla: menú  Extensiones → Apps Script.
 *     Se abre un editor con un archivo Código.gs que tiene una
 *     función vacía. Borrá TODO lo que haya ahí.
 *
 *  3. Copiá este archivo entero y pegalo en su lugar. Guardá
 *     (el icono del disquete, o Ctrl+S).
 *
 *  4. Arriba a la derecha: botón azul  Implementar → Nueva implementación.
 *       · Tocá el engranaje y elegí el tipo  "Aplicación web"
 *       · Descripción: buzón
 *       · Ejecutar como:        Yo  (tu cuenta)
 *       · Quién tiene acceso:   Cualquier usuario     ← IMPORTANTE
 *     Tocá  Implementar.
 *
 *  5. Google te va a pedir permisos la primera vez. Aceptá.
 *     Va a aparecer una pantalla que dice que la app no está
 *     verificada: es tu propio script, andá a "Configuración
 *     avanzada" → "Ir a (nombre del proyecto)".
 *
 *  6. Al final te da una  URL de la aplicación web , que termina
 *     en  /exec . Copiala y pasámela: va en la constante
 *     URL_BUZON de index.html.
 *
 * ─────────────────────────────────────────────────────────────
 * QUÉ HACE
 * ─────────────────────────────────────────────────────────────
 * Crea (si no existen) dos hojas:
 *
 *   Tandas   → una fila por tanda: fecha, alumno, año, sala, modo,
 *              practicó, sin ayuda, %, pistas, salteadas, minutos.
 *   Detalle  → una fila por ejercicio, para ver dónde falló cada uno.
 *
 * Si una misma tanda llega dos veces (porque se reintentó el envío),
 * la ignora: cada una tiene un id único.
 *
 * NOTA SOBRE PRIVACIDAD
 * Esto manda el nombre que escribe el alumno a una planilla de Drive.
 * Si preferís no guardar nombres completos, pediles que pongan
 * nombre y la inicial del apellido, o el número de lista.
 */

var HOJA_TANDAS  = 'Tandas';
var HOJA_DETALLE = 'Detalle';

function doPost(e) {
  try {
    var t = JSON.parse(e.postData.contents);
    if (!t || !t.id) return _ok('sin id');

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var hT = _hoja(ss, HOJA_TANDAS, [
      'id','Fecha','Alumno','Año','Sala','Modo','Ejercicios',
      'Practicó (con ayuda)','Sin ayuda','% sin ayuda','Pistas','Salteadas','Minutos','Recibido'
    ]);

    if (_yaEsta(hT, t.id)) return _ok('repetida');

    var pct = t.total ? Math.round(t.sinAyuda / t.total * 100) : 0;
    hT.appendRow([
      t.id, t.fecha || '', t.alumno || '', t.anio || '', t.salaNom || t.sala || '',
      t.modo === 'cuenta' ? 'Cuenta' : 'Práctica',
      t.total || 0, t.resueltos || 0, t.sinAyuda || 0, pct,
      t.pistas || 0, t.salteadas || 0, Math.round((t.seg || 0) / 6) / 10,
      new Date()
    ]);

    var ejs = t.ejs || [];
    if (ejs.length) {
      var hD = _hoja(ss, HOJA_DETALLE, [
        'id','Fecha','Alumno','Año','Sala','Concepto','Tipo','Consigna',
        'Intentos','Sin ayuda','Lo resolvió','Pistas','Salteado','Segundos'
      ]);
      var filas = ejs.map(function (x) {
        return [
          t.id, t.fecha || '', t.alumno || '', t.anio || '', t.salaNom || '',
          x.c || '', x.t || '', x.q || '',
          x.i || 0, x.ok1 ? 'SÍ' : 'no', x.ok ? 'sí' : 'no',
          x.p || 0, x.s ? 'sí' : '', x.sg || 0
        ];
      });
      hD.getRange(hD.getLastRow() + 1, 1, filas.length, filas[0].length).setValues(filas);
    }

    return _ok('ok');
  } catch (err) {
    return _ok('error: ' + err);
  }
}

/* Para probar desde el navegador que quedó publicado:
   abrí la URL y tiene que decir "buzón activo". */
function doGet() {
  return ContentService.createTextOutput('buzón activo');
}

function _hoja(ss, nombre, encabezados) {
  var h = ss.getSheetByName(nombre);
  if (!h) {
    h = ss.insertSheet(nombre);
    h.appendRow(encabezados);
    h.getRange(1, 1, 1, encabezados.length).setFontWeight('bold');
    h.setFrozenRows(1);
  }
  return h;
}

function _yaEsta(hoja, id) {
  var n = hoja.getLastRow();
  if (n < 2) return false;
  var ids = hoja.getRange(2, 1, n - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) if (ids[i][0] === id) return true;
  return false;
}

function _ok(msg) {
  return ContentService.createTextOutput(msg).setMimeType(ContentService.MimeType.TEXT);
}
