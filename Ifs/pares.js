import { assertEquals } from "jsr:@std/assert/equals";

// TAREA: en la funcion test_par, debe checar si el numero es par, debe retornar true, en caso contrario false
function es_par(numero) {
}

Deno.test({
  name: "es par",
  fn() {
    assertEquals(es_par(10), true);
    assertEquals(es_par(5), false);
    assertEquals(es_par(8), true);
    assertEquals(es_par(5), false);
    assertEquals(es_par(1), false);
    assertEquals(es_par(0), true);
    assertEquals(es_par(-10), true);
    assertEquals(es_par(-5), false);
    assertEquals(es_par(-8), true);
    assertEquals(es_par(-5), false);
    assertEquals(es_par(-1), false);
  },
});
