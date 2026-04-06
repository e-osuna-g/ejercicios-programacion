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

Nota: en módulos, se usa el keyword(palabra clave) `export` para poder exportar o usar este código en otros módulos, y podemos usar el keyword `import` para importar de un archivo o librería: `variables`, `constantes`, `funciones`, `clases` u `objetos`.

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

Este es el momento idóneo para empezar un ejercicio pequeño abre el archivo [funciones1.js](/funciones/funciones1.js), para ejecutarlo puedes ejecutar en tu consola: `deno test funciones/funciones1.js` o configurar tu espacio de trabajo. veras que las pruebas fallan, tu trabajo es completar el código dentro de las funciones para que todas las pruebas, se completen de manera satisfactoria.

### Otras funciones

#### Function expression (expresión de función)

Una `Function expression` es una función anónima, que se asigna a una variable y puede ser utilizada por el nombre de la variable, veamos un ejemplo:

```javascript
let log = function (str) {
  console.log(str);
};
log("Hola");
```

Como podemos apreciar, estamos asignando la función como si de un valor se tratara, por que así es, de ahora en adelante podremos usar `log` como cualquier otra función, excepto que seguirá las reglas para las variables declaradas con `let`.

Cuando una función es asignada a una variable, aunque tenga nombre, esta no se agrega al scope actual por ejemplo:

```javascript
function resta(num1, num2) {
  return num1 - num2;
}
let sum = function suma(num1, num2) {
  return num1 + num2;
};
console.log(sum); // logea la función como una caedna
console.log(resta); // logea la función como una cadena
console.log(suma); //Tira error: Uncaught ReferenceError ReferenceError: suma is not defined
```

El ejemplo anterior tirara error al intentar usar la función `suma`, pues no esta asignada a ningún valor, y la función no fue creada en el `scope` actual. como si lo fue la función `resta`.

Estas funciones también pueden ser asignadas en objetos como:

```javascript
let user = {
	name: 'Federico'
	getEmail: function() {
	 // ...code here
	}
}
```

#### Arrow functions (funciones flecha)

Las funciones flechas, son una forma de generar `Function expression` de forma mas concisa y con algunos cambios, veamos un ejemplo sencillo con suma:

```javascript
let suma = (a, b) => a + b;
```

en este caso no es necesario usar la palabra clave function, la notación `=>` normalmente llamada Flecha `Arrow`, Los argumentos si son mas de 1 es necesario estar envueltos en paréntesis, y si la función tiene una sola instrucción, se pueden omitir las llaves `{}`.
Veamos otros ejemplo:

```javascript
let inverse = (a) => a * -1; // si la funcion recibe 1 solo parametro no necesita paréntesis
let PI = (_) => 3.14159; // si la función no necesita parametros, aun asi es necesario, o un parametro o unos paréntesis.
let PI2 = () => 3.14159; // esta tambien es uan forma valida.

let object = (name) => ({ name: name }); // si la funcion va regresar un objecto, este debe ir entre paréntesis, para eliminar la ambigüedad

let multiLine = () => {
  //...code
  return "";
}; //en este ejemplo una funcion larga ejecuta muchas lineas, y regresa algo al final
```

Hay que tener en cuenta que las funciones flechas como las expresión de función, **No son declaraciones** y no serán izadas(hoisted) así que:

```javascript
hello(); // Error
const hello = () => "Hello";
```

El ejemplo anterior dará un error en contraparte, el siguiente ejemplo si funcionara.

```javascript
hello();
function hello() {
  return "Hello";
}
```

### Diferencias entre funciones flecha, y expresión de función

La diferencia radica en que las funciones flecha no tienen un valor `this` propio, veamos que significa esto:

```javascript
const user = {
  name: "John",
  greet: function () {
    return "Hello " + this.name;
  },
};
user.greet(); // Hello John
```

En el ejemplo anterior, en la función greet, el objeto `this` sera la misma variable `user`, por lo tanto `this.name` dará como resultado `"Jhon"`, en cambio con una función flecha abría un error:

```javascript
const user = {
  name: "John",
  greet: () => {
    return "Hello " + this.name;
  },
};
user.greet(); // Cannot read properties of undefined (reading 'name')
```

En el ejemplo anterior, el valor `this`, estará `undefined` lo que provocara el error al intentar leer `name`
