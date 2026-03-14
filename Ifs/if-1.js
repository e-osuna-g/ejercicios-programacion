import { assertEquals } from "jsr:@std/assert";

// TAREA: en la funcion test_promedio_aprobado, promediar las 3 calificaciones
// y regresar si aprobo con mayor o igual de 7.0 un verdadero (true) o si es menor un falso (false)
function test_promedio_aprobado(calificacion1, calificacion2, calificacion3) {
}

Deno.test({
  name: "Calcular promedio y ",
  fn() {
    assertEquals(test_promedio_aprobado(10, 10, 10), true);
    assertEquals(test_promedio_aprobado(5, 5, 5), false);
    assertEquals(test_promedio_aprobado(8, 7, 5), false);
    assertEquals(test_promedio_aprobado(5, 5, 4), false);
    assertEquals(test_promedio_aprobado(1, 10, 10), true);
  },
});
