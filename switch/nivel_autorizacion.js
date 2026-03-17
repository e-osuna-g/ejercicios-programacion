import { assertEquals } from "jsr:@std/assert/equals";

// TAREA: la funcion recibe el tipo de usuario como cadena,
// regresar los permisos del usuario en formato cadena
// para
// Root = root
// Admin = full
// Manager = read:all
// User = read:own
// para todo lo demas =  unauth

/**
 * @param {string} user
 * @returns {string}
 */
function autorizacion(user) {
  return "";
}

Deno.test({
  name: "promedio y aprobado ",
  fn() {
    assertEquals(autorizacion("Root"), "root");
    assertEquals(autorizacion("Admin"), "full");
    assertEquals(autorizacion("Manager"), "read:all");
    assertEquals(autorizacion("User"), "read:own");
    assertEquals(autorizacion("No-User"), "unauth");
    assertEquals(autorizacion("-"), "unauth");
    assertEquals(autorizacion("user"), "unauth");
  },
});
