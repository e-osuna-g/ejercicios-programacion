import { assertAlmostEquals } from "jsr:@std/assert";

/**
 * TAREA: esta funcion debe recibir numero (un numero entero)
 * que representa el dinero ganado en el año, y la funcion debe
 * devolver el dinero que debe en impuestos,
 * si es menor a 10_000 debe devolver el 5%
 * si es mayor a 10_000 debe devolver el 5% de los primeros 10_000 y el 10% de cualquier cantidad arriba de los 10_000
 * si es mayor a 20_000 debe devolver lo anterior, y el 20% por encima de los 20_000
 * si es mayor a 40_000 debe devolver lo anterior, y el 35% por encima de los 40_000
 * @param {number} numero
 */
function calcular_impuestos(numero) {
}

Deno.test({
  name: "dividir",
  fn() {
    assertAlmostEquals(calcular_impuestos(0), 0);
    assertAlmostEquals(calcular_impuestos(8_000), 400);
    assertAlmostEquals(calcular_impuestos(7_500), 375);
    assertAlmostEquals(calcular_impuestos(9_900), 495);
    assertAlmostEquals(calcular_impuestos(10_000), 500);
    assertAlmostEquals(calcular_impuestos(15_000), 1_000);
    assertAlmostEquals(calcular_impuestos(17_800), 1_280);
    assertAlmostEquals(calcular_impuestos(20_000), 1_500);
    assertAlmostEquals(calcular_impuestos(23_500), 2_200);
    assertAlmostEquals(calcular_impuestos(30_000), 3_500);
    assertAlmostEquals(calcular_impuestos(30_500), 3_600);
    assertAlmostEquals(calcular_impuestos(38_500), 5_200);
    assertAlmostEquals(calcular_impuestos(40_000), 5_500);
    assertAlmostEquals(calcular_impuestos(50_000), 9_000);
    assertAlmostEquals(calcular_impuestos(55_800), 11_030);
    assertAlmostEquals(calcular_impuestos(70_000), 16_000);
    assertAlmostEquals(calcular_impuestos(73_500), 17_225);
  },
});
