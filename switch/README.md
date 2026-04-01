# Sentencia if...else

La sentencia `switch` ejecuta un pedazo de codigo, hasta encontrar un `break` si el valor especificado esta en el caso correspondiente. Si no hay una coincidencia, se ejecuta la declaración default, la comparacion de la sentencia `switch` es una [comparacion estricta (===),](/comparadores/README.md)

```javascript
const a = 5;
switch (a) {
  case 5:
    console.log("5");
    break;
  default:
    console.log("default");
}
```

Si ejecutamos el ejemplo anterior, se imprimira 5 a la consola, puesto que a tiene por valor el numero 5, si a tuviera por valor `'5'`(una cadena), ejecutaria el caso default, pues no hay ningun otro caso que corresponda, si el `switch` no encuentra caso para ejecutar y no hay un `default` no ejecuta nada. El caso `default` por lo general va al final del switch pero no tiene por que ser asi.

La declaracion `break;` es opcional y esta asociada con cada etiqueta `case`, y asegura que el programa salga de la etiqueta `switch` y ejecute la instrucción que sigue a este.

```javascript
switch (expresion) {
  case "Rojo":
    console.log("Rojo");
    break;
  case "Azul":
    console.log("Azul");
    break;
  case "Verde":
    console.log("Verde");
    break;
  case "Amarillo":
    console.log("Amarillo");
  case "Naranja":
    console.log("Naranja");
    break;
}
```

En el case anterior, una de las opciones no tiene `break` lo que sucede en este caso es, que si `expresion` es Amarillo, se ejecutar el bloque de amarillo y el bloque de naranja, cuando estemos usando la sentencia `switch` es importante usar el `break` apropiadamente.
