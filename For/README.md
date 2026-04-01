# La sentencia For

La sentencia For crea un bucle que consisten en 3 expresiones opcionales, entre unos parentesis y separadas por punto y coma.

```javascript
for (let x = 0; x < 5; x++) console.log("x vale:", x);
for(inicializacion; condicion; expresion final) sentencia
```

### Inicializacion

Una expresion que puede ser una declaración esta es evaluada una ves, antes de empezar el bucle, tipicamente se usa para inicializar un contador, esta expresion tipicamente declara variables nuevas con `var`/`let`.

Nota: variables declaradas con `var`, no son local al loop, estan en el mismo `scope` que el for, variables declaradas con `let` son locales al loop. Por lo mismo yo recomiendo usar let en la mayoria de los casos, a no ser que necesites la variable inicializada despues de la sentencia `for` lo cual suele ser muy raro.
