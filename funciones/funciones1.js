import { assertEquals } from "jsr:@std/assert/equals";
// TAREA: sumar num1, y num2 y devolver el resultado
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */
function suma(num1, num2) {
}

Deno.test({
  name: "funciones:suma",
  fn() {
    assertEquals(suma(1, 3), 4);
    assertEquals(suma(0xff, 77), 332);
    assertEquals(suma(15, 0), 15);
    assertEquals(suma(0, 0), 0);
    assertEquals(suma(-5, -5), -10);
    assertEquals(suma(7, -5), 2);
    assertEquals(suma(-5, 5), 0);
    console.log(
      "El test funciones:suma fue implementado correctamente, felicidades!",
    );
  },
});

// TAREA: para formar una URL hay que concatenar 3 cadenas diferentes
// el origin se le añade un / y luego el path, despues de eso
// se le añade un / y se agrega el search si esta disponible
/**
 * @param {string} origin
 * @param {string} [pathName]
 * @param {string} [search]
 * @returns {string}
 */
function construirUrl(origin, pathName = "", search = "") {
}
Deno.test({
  name: "funciones:construirURL",
  fn() {
    assertEquals(
      construirUrl("localhost.com", "path1", "search=1"),
      "localhost.com/path1?search=1",
    );
    assertEquals(
      construirUrl("localhost.com", "path2", "search=1&param=2"),
      "localhost.com/path2?search=1&param=2",
    );
    assertEquals(
      construirUrl("localhost.com", "path3"),
      "localhost.com/path3",
    );
    assertEquals(
      construirUrl("localhost.com"),
      "localhost.com/",
    );
    assertEquals(
      construirUrl("localhost2.com", "", "onlySearch=3"),
      "localhost2.com/?onlySearch=3",
    );
    console.log(
      "El test funciones:construirURL fue implementado correctamente, felicidades!",
    );
  },
});
