# La sentencia while

La sentencia while crea un loop que se ejecuta mientras la `condicion` sea verdadera.

```javascript
while (condicion) sentencia;
```

### condicion

Una expresion que sera evaluada antes de cada iteración del bucle. si es true, la `sentencia` se ejecutara, si es false, el bucle termina y la siguiente expresion al `while` sera ejecutada

### sentencia

una expresion que sera ejecutada mientras la `condición` se evalue a `true`, puedes usar un `block statement` para ejecutar mas de una expresión, para no ejecutar ninguna expresion en el loop simplemente terminar con un `;` (`empty statement`)

### Notas

Como otras sentencias de ciclado, puedes usar sentencias de control de flujo dentro de la `Sentencia`:

- `break`: Termina la ejecucion de la sentencia de ciclado (En este caro for) y ejecuta la siguiente expresión
- `continue`: Termina la ejecucíon de la sentencia de ciclado, y re-evalua `Expresion Final` y despues `continue`

### Ejemplos

En este ejemplo vemos que ciclo while, seguira mientras no demos un numero mayor a 5

```javascript
let condition = true;
while (condition) {
  const number = Number(prompt("input a number bigger than 5 to exit:"));
  if (number > 5) condition = false;
}
```

En este ejemplo, usamos while para hacer lo que hace un ciclo for, cuando veas este patrón, es muy probable que sea mejor usar el ciclo For

```javascript
let i = 0;
while (i < 5) {
  console.log("current index", i); //esto se ejecutara 5 veces desde el 0 al 4
  i++;
}
```

# La sentencia do...while

La sentencia `do...while` crea un bucle que ejecuta la sentencia mientras la `condicion` sea `true`, la condicion es evaluada despues de ejecutar la `sentencia`, esto hace que la `sentencia` se ejecute al menos una ves.

```javascript
let i = 10;
do {
  console.log("i", i);
} while (i < 5);
```

En el bloque de codigo anterior podemos ver que aunque i es mayor a 5, se ejecuta el console.log almenos una ves. Lo cual puede ser util en ciertos escenarios, como la creación de un menu donde se da un `prompt` al usuario y se acaba la ejecucion con cierta entrada, como podemos apreciar en un ejemplo anterior.

```javascript
let condition = true;
while (condition) {
  const number = Number(prompt("input a number bigger than 5 to exit:"));
  if (number > 5) condition = false;
}
```

Referencias:

- [MDN While statement](hhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN Do...While statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
