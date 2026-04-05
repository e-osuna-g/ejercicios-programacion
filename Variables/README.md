# Variables

Podemos ver las variables como contenedores de información o datos, como un numero, o el nombre de una persona, La sintaxis para declarar una variable es:

```javascript
let identificador = expresion;
```

en el ejemplo anterior, podemos apreciar varias partes de la declaración de una variable

Primero tenemos la palabra clave `let` tambien `var` puede ser usado, pero su uso a caido en desuso, pues `let` permite que el "Scope" de una variable sea en el bloque, y el "Scope" de `var` siempre es la funcion que lo contiene o global, lo cual puede causar problemas cuando existe el mismo nombre de variable en 2 block scopes en la misma función. en este tipo de declaración `const` tambien puede ser usado, pero la variable no podra ser reasignada despues de la declaración.

como segundo elemento tenemos el `identificador`, tiene que ser un [identificador de javascript valido](/minis/identifier.md) o un [Patrón de desestructuración](/minis/Destructuring.md)

Como tercer elemento tenemos el operador de asignación `=`, este operador sirve para asignarle la `expresion` al `identificador`

y por ultimo la `expresion` que sera asignada al `identificador` esto puede ser desde un simple valor `"Hola"`, `5`, a una llamada a una función o una funcion en si misma.
ejemplos

```javascript
let a = 5;
let b = 7;
let c = a + b; // la suma en este momento de a y b
let d = "Una cadena"; // una cadena de caracteres como valor
let e = true; //un valor booleano
let f = !e; // el valor booleano contrario a true, osease false
let g = null; // el valor especifico null,
let h = undefined; // el valor por defecto de una variable que no ha sido inicializada pero si creada
```

Para reasignar un valor a una variable ya creada hacemos

```javascript
let a = 5;
a = 7; // simplemente volvemos a asignar la variable sin usar let. eso causaria un error.
```

### Nombres de variables

Puedes asignar casi cualquier nombre a tus variables pero hay ciertas limitaciones o convenciones:

- convención: usa solo caracteres latinos, (0-9, a-z, A-Z) y guiones bajos (\_) puede causar errores o ser dificiles de entender para audiencias de otros lados del mundo.
- convención: No uses guiones bajos (\_) al principio de tus variables, esto es usado en ciertos contextos de Javascript para significar cosas en especifico, y puede ser confuso, en uso general, un guion bajo se usa para declarar una variable que no sera usada, y dos guiones bajos \_\_ para una variable "privada".
- limitación: No usar numeros al principio del identificador esto no esta permitido y causara un error.
- convención: usar camelCase, eso significa empezar nombres de variables en minusculas, y si una segunda palabra es necesaria añadirla con la primera letra mayuscula por ejemplo si queremos llamar a una variable _nombre completo_ quedaria como `nombreCompleto`. nota: el autor de este documento prefiere **snake case** donde las palabras se unen con guiones bajos, pero tambien entiendo que en este caso es mejor seguir la convención ej: `nombre_completo`.
- convención: has tus nombres de variables intuitivos y que contengan información sobre la información contenida.
- Los nombres de variable son sensibles a mayusculas y minisculas por ejemplo `nombreCompleto` y `nombrecompleto` son dos variables diferentes.
- No uses palabras clave para tus nombres de variable por lo tanto no puedes llamar variables `var`, `for`, `function`, `let` y otras.

### Tipos de variables

En esta sección veremos algunos tipos de variables que podemos almacenar en variables.

#### Number

El tipo de variable `Number` es cualquier numero, puede ser `7`, `-7`, `3.1415`, Todos los numeros en javascript son representados por su valor de punto flotante y no su entero. por ejemplo.

```javascript
let x = 7;
console.log(x === 7.0); //esto imprimira a consola `true`
```

Los valores numericos tambien pueden ser representados por diferentes notaciones el valor `255` en decimal puede ser usado como

- `0xff` en hexadecimal
- `0b11111111` en binario
- `0.255e3` en exponenciacion decimal
- `0o377` en octal

#### String

El Valor de cadena, son conjuntos de caracteres que forman un texto, cuando asignas un valor de cadena a una variable debes envolver la cadena en comillas simples `''`, comillas dobles `""` o comilla invertida ` `` `, ejemplos:

```javascript
let hola = "Hola";
let adios = "Adios";
let holaAdios = `Hola y Adios`;
```

En otro momento aprenderemos como trabajar con cadenas

#### Boolean

Los valores booleanos son usados para representar valores en logica booleana los cuales son `true`(verdadero) y `false` (falso). son usualmente usados para probar condiciones logicas como `5 > 4`, `5===5`, y otros operadores que veremos mas a fondo despues.

#### Array

Los `Array` es un unico objeto que tiene multiples valores, para declarar uno, hay que envolver los valores en corchetes `[1,2,3,4]` , simplemente abres y cierras corchetes si quieres un arreglo vacio `[]`, una ves que defines un arreglo, puedes acceder a sus miembros con corchetes y el indice que quieres acceder del arreglo entre los corchetes, los indices en javascript empieza en 0. ejemplos:

```javascript
let arreglo = [1, 2, 3, 4, 5];
arreglo[0]; // da como valor: 1
arreglo[4]; // da como valor: 5
let nombres = ["Sofia", "Juan", "Pablo"];
nombres[0]; // da como valor: 'Sofia'
nombres[1]; // da como valor: 'Juan'
```

##### Object

El tipo `Object` es un tipo complejo, que puede ser usado para guardar otros tipos de datos incluidos otros objetos. Podrias tener un objeto que represente a un usuario y la información necesaria para un sistema por ejemplo. su nombre de pila, su edad, su correo y su nombre de usuario. para crear un objeto se usan llaves `{}` y dentro se agregan attributos con nombres validos de identificador, y un valor.

```javascript
let user = {
  nombre: "Elisa",
  edad: 34,
  usuario: "eli22",
  correo: "eli@gg.com",
};
```

### Constantes

En Javascript tambien puedes usar la palabra clave `const`, es usada para crear valores que no cambian en tu programa. son usadas como variables `let` con la excepción de que

- debes inicializarla cuando las declaras
- no puedes asignarle un nuevo valor despues de las has inicializado
  por ejemplo

```javascript
const charge; //veras un error con este codigo

const count = 1;
count = 2; // Veras un error con este codigo
```
