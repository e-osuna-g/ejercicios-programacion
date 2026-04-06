# Uso de funciones

Empezaremos el uso de funciones con un ejemplo sencillo:

```javascript
function log(str) {
  console.log(str);
}

log("Hola"); // Hola
log("Adios"); // Adios
```

En el ejemplo anterior podemos apreciar que las funciones pueden ser llamadas mas de una ves, de hecho pueden ser usadas tanto como sea necesario.

#### Variables Locales

Las variables declaradas dentro de una función son locales, lo cual quiere decir que solo se mantendrán "vivas", mientras la función se este ejecutando:

```javascript
let variable1 = 5;

function suma(num1) {
  let num2 = num1 + num1;
  return num2;
} // num2 deja de existir aqui, y no puede ser usada fuera
//el uso de num2 aqui daria un error
num2; // error: Uncaught (in promise) ReferenceError: num2 is not defined
```

#### Uso en código

Las funciones pueden ser usadas en cualquier lugar que una expresión es usada:

```javascript
function aCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
let temperaturaCorporal = aCelsius(100); //podemos asignar el resultado a una variable: 37.77777777777778

let resultadoExamen = "Su temperatura es:" + temperaturaCorporal;
if (aCelsius(100) > 37.2) {
  console.log("Tiene fiebre, favor de tomar su medicamento");
}
```

Como vemos en el ejemplo anterior, puedes asignar una variable directamente, con el resultado de una función, o usarla dentro de un `if` podría ser un `for` o un `while.

#### Como saber donde usarlas

Para aprender a identificar cuando crear funciones nuevas, podemos tratar de identificar ciertos patrones por ejemplo:
Este código se repite en varios lugares de mi proyecto? por ejemplo una comparación o un conjunto de comparaciones

```javascript
if (edad > 18) {
 ...
}
```

Podríamos identificar que ese if se repite varias veces en nuestro proyecto, entonces generamos una función nueva: (cada comentario hace referencia a un archivo diferente)

```javascript
// util.js
export function esAdulto(edad) {
	return edad > 18;
}

// main.js
import { esAdulto } from './util.js'
if (esAdulto) {
   ...
}
```

tal vez no sea tan fácil apreciar, el uso o la mejora que da al código. se gana mucho al tener un solo punto en el cual necesitemos actualizar nuestro código de ser necesario, por que cambiaron las necesidades del cliente o hemos introducido un `bug`.

Nota: en módulos, se usa el keyword(palabra clave) `export` para poder exportar o usar este código en otros módulos, y podemos usar el keyword `import` para importar de un archivo o libreria: `variables`, `constantes`, `funciones`, `clases` u `objetos`

---

El siguiente ejemplo es algo que también podríamos ver en un proyecto real. el formateo de un teléfono

```javascript
// main.js
import { formatPhone } from './util.js'
formatPhone("3335058790"); //"(333)-505-8790"

// anotherFile.js
import { formatPhone } from './util.js'
formatPhone("5051234560"); //"(505)-123-4560"

// util.js
export function formatPhone(phoneStr) {
	if(phoneStr.length == 10) {
	return `(${phoneStr.substring(0,3)})-${phoneStr.substring(3,6)}-${phoneStr.substring(6)}` phoneStr
	}
	return phoneStr
}
```

cada comentario con nombre, es un archivo diferente, en este caso, podemos ver como una sola función puede ser usada en todo tu proyecto, de esta manera si necesitamos agregar un nuevo formato o actualizar el que ya tenemos, podemos actualizar un solo punto del proyecto y se actualizaran todos los usos.

Este es el momento idóneo para empezar un ejercicio pequeño abre el archivo [funciones1.js](/funciones/funciones1.js), para ejecutarlo puedes ejecutar en tu consola
`deno test funciones/funciones1.js`, este archivo cuenta con 2 ejercicios, intenta hacerlos todos.
