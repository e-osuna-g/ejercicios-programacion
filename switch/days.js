import { assertEquals } from "jsr:@std/assert";

// TAREA: en la funcion dia_semana se recibira dia como numero
// y debera retorner como cadena el dia de la semana empezando con 0 domingo terminando con 6 sabado,
// en cualquier otro caso debera retornar undefined
/**
 * @param {number} dia El numero del dia empezando en doming 0
 * @returns {string}
 */
function dia_semana(dia) {
  return "";
}

Deno.test({
  name: "promedio y aprobado ",
  fn() {
    assertEquals(dia_semana(0), "domingo");
    assertEquals(dia_semana(1), "lunes");
    assertEquals(dia_semana(2), "martes");
    assertEquals(dia_semana(3), "miercoles");
    assertEquals(dia_semana(4), "jueves");
    assertEquals(dia_semana(5), "viernes");
    assertEquals(dia_semana(6), "sabado");
  },
});
