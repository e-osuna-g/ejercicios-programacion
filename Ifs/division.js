import { assertAlmostEquals } from "jsr:@std/assert";

// TAREA: esta funcion debe dividir el {num1} entre el {num2},
// si el segundo operador es, 0, no hacer la division y devolver el valor undefined
function division(num1, num2) {
}

Deno.test({
  name: "dividir",
  fn() {
    assertAlmostEquals(division(10, 10), 1);
    assertAlmostEquals(division(7, 5), 1.4);
    assertAlmostEquals(division(-2, 4), -0.5);
    assertAlmostEquals(division(365, 12), 30.416666666666668);
    assertAlmostEquals(division(0, 5), 0);
    assertAlmostEquals(division(5, 0), undefined);
  },
});
