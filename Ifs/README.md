# Sentencia if...else

La sentencia `if...else` ejecuta una sentencia, si la condición especificada es `true`(verdadera), si la condicion es `false`(falsa), se ejecuta otra sentencia

```javascript
const a = 6;
if (a > 5) console.log("'a' es mayor a 5");
else console.log("'a' es menor o igual a 5");
```

En el ejemplo anterior, la sentencia `console.log("'a' es mayor a 5");` sera ejecutada, pues a con valor `6` es mayor a `5`

Estructura del `if...else`

```javascript
if (condición) sentencia1;
else sentencia2;
```

### condición

Una condición que puede ser considerada verdadera o falsa ej.

```javascript
a > 5; // si a = 6, true, si es 5 o menor, false
100 < 50; // false
10 == 5; // false
(""); // false
("1"); // true
("0"); // true
("false"); // true, cualquier cadena que no sea una cadena vacia da como resultado true
true; // true
false; // false
0; // false
1; // true, cualquier numero que no sea 0, da como resultado true
{
} // true, cualquier objecto da como resultado true
[]; // true, cualquier arreglo da como resultado true
```

### sentencia1

La sentencia1 va ser ejecutada siempre y cuando el resultado de `condición` sea `true`, puede incluir cualquier sentencia, incluidos otros `if`, `for`, `switch`, etc, si necesitas ejecutar mas de una instrucción puedes escribir una sentencia de bloque (block statement) `{ ... }` para agrupar esas sentencias. Para no ejecutar ningun statement, puedes incluir una sentencia vacia `;`.

### sentencia2

La sentencia 2 es opcional y sera ejecutada siempre y cuando el resultado de `condicion` sea `false`, todo lo demas de sentencia1 aplica.

### Ejemplos

```javascript
if (5 > 0) {
  // block statement
  numero = numero + 1;
  alert("El numero es:", numero);
} //no tiene else pues es opcional

if (5 > 0); //sentencia vacia, no hara nada
else {
  numero = numero + 1;
  alert("El numero es:", numero);
}

if (boolean) {
  // codigo aqui
} else if (boolean2) {
  //puedes ejecutar un if, como la unica sentencia de un else
} else {
  //este es el else del segundo if
}
```

## Errores comunes

Si no usas sentencias de bloques puedes confundirte veamos el siguiente ejemplo.

```javascript
function checarValor(a, b) {
  if (a === 1)
    if (b === 2) console.log("a es 1 y b es 2");
    else console.log("a no es 1");
}
```

El codigo anterior parece estar bien construido, pero si no hay bloques de codigo, el `else` estara conectado al if mas proximo que no tenga, una clausula `else` en este caso `if (b===2)`, asi que si usamos la funcion `checarValor(1,3)` el resultado en la consola sera `a no es 1`.

El codigo anterior bien identado se veria asi.

```javascript
function checarValor(a, b) {
  if (a === 1)
    if (b === 2) console.log("a es 1 y b es 2");
    else console.log("a no es 1");
}
```

Pero probablemente la intención era:

```javascript
function checarValor(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a es 1 y b es 2");
    }
  } else console.log("a no es 1");
}
```

### Otro Error comun: Asignación en una expresion condicional

Veamos el siguiente ejemplo

```javascript
if ((x = y)) {
  // …
}
```

Aunque este tipo de codigo es usual verlos en los bucles `while`, en la sentencia if, la asignacion solo pasa una vez, para ser mas claro puedes cambiar el codigo a ser

```javascript
x = y;
if (x) {
  // …
}
```

de esta forma la intencion es clara, y se lee de forma mas facil.

Si te quedo alguna duda o quisieras que agregara alguna explicación [abre un issue en el repositorio](https://github.com/e-osuna-g/ejercicios-programacion/issues).

Credit: [MDN if statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
