# La sentencia For

La sentencia For crea un bucle que consisten en 3 expresiones opcionales, entre unos parentesis y separadas por punto y coma.

```javascript
for (let x = 0; x < 5; x++) console.log("x vale:", x);
for(inicializacion; condicion; expresion final) sentencia
```

### Inicializacion

Una expresion que puede ser una declaración esta es evaluada una ves, antes de empezar el bucle, tipicamente se usa para inicializar un contador, esta expresion tipicamente declara variables nuevas con `var`/`let`.

Nota: variables declaradas con `var`, no son local al loop, estan en el mismo `scope` que el for, variables declaradas con `let` son locales al loop. Por lo mismo yo recomiendo usar let en la mayoria de los casos, a no ser que necesites la variable inicializada despues de la sentencia `for` lo cual suele ser muy raro.

### Condición

Una expresion que sera evaluada antes de cada iteración del bucle, si esta expresion da como resultado `true`, la `sentencia` es ejecuta, si no, el bucle `for` termina y se ejecuta la linea despues de este

### Expresion Final

Una expresion que se evalua al final de cada iteracion del for, esto ocurre antes de la siguiente evaluacion de la `condición`, Generalmente usada para aumentar o incrementar la variable de contador creada en la `inicialización`

### Sentencia

una expresion que sera ejecutada mientras la `condición` se evalue a `true`, puedes usar un `block statement` para ejecutar mas de una expresión, para no ejecutar ninguna expresion en el loop simplemente terminar con un `;` (`empty statement`)

### Notas

Como otras sentencias de ciclado, puedes usar sentencias de control de flujo dentro de la `Sentencia`:

- `break`: Termina la ejecucion de la sentencia de ciclado (En este caro for) y ejecuta la siguiente expresión
- `continue`: Termina la ejecucíon de la sentencia de ciclado, y re-evalua `Expresion Final` y despues `continue`

Yo aconsejo siempre seguir el patron comun del for con las tres expresiones en el lugar correspondiente, hace el ciclo mucho mas fácil de leer.

Es probablemente uno de los for menos usados, en uso comun, pero es muy importante dominarlo para entender correctamente los otros for, y saber cuando usar este o el `for..of` o `for...in`.

En lecciones avanzadas veremos los usos mas comunes para este `for`

### Ejemplos

```javascript
for (let i = 0; i < 9; i++) {
  console.log(i); // esto imprimira a consola los numeros del 0 al 8
}
```

Inicializacion opcional

```javascript
let i = 0;
for (; i < 9; i++) {
  // la inicializacion es opcional
  console.log(i);
}
```

Condicion opcional

```javascript
for (let i = 0; ; i++) {
  // la inicializacion es opcional
  console.log(i);
  if (i > 3) break; //recuerda si no hay condicion siempre tener una forma de romper el ciclo, si no quedara atascado en el ciclo y el programa no terminara
}
```

Expresion Final opcional

```javascript
for (let i = 0; i < 3; ) {
  // la inicializacion es opcional
  console.log(i);
  i++; // Recuerda que siempre hay que lograr que la condicion falle en algun momento para que no quede ciclado el for y el programa no termine
}
```

continue

```javascript
for (let i = 0; i < 9; i++) {
  // la inicializacion es opcional
  if (i % 2) continue;
  console.log(i); // este log solo sera ejecutado cuando i%2 sea falso, lo cual imprimira los numeros 0, 2, 3, 4, 6 y 8
}
```

Si te quedo alguna duda o quisieras que agregara alguna explicación.
[abre un issue en el repositorio](https://github.com/e-osuna-g/ejercicios-programacion/issues).

Referencias:

- [MDN For statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
