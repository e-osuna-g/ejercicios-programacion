# Destructuring

La sintaxis de de-estructuración hace posible des-empacar valores, de un arreglo o un objeto, puede ser muy útil en ciertos casos.

#### Arreglos

Primero veremos la sintaxis para arreglos:

```javascript
let [a, b] = [0, 1];
a; //0
b; //1
```

en este ejemplo estamos creando dos nuevas variables, `a` y `b`, y se les asignan los valores del arreglo en el orden que son creadas, a la variable `a` le será asignado `0`, y a la variable `b` le será asignado `1`.

Podemos ignorar ciertas parte del arreglo podemos usar variables que empiecen con guion bajo

```javascript
let [_, _1, _2, a, b] = [0, 1, 2, 3, 4];
a; // 3
b; // 4
```

Las variables realmente no son ignoradas por el entorno de ejecución y pueden ser usadas libremente, pero la convención es que las variables que empiezan con un guion bajo son ignoradas, incluso los linters como `prettier`, `Biome` o `Deno`, ignoraran que las variables que empiecen con guion bajo sean ignoradas.

Tambien podemos pasar todos los valores restantes a otro arreglo de la siguiente manera:

```javascript
let [a, b, ...resto] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
a; // 0
b; // 1
resto; // [2,3,4,5,6,7,8]
```

Esto solo funciona cuando el resto es el ultimo elemento. El siguiente código es invalido

```javascript
let [...resto, a, b] = [0,1,2,3,4,5,6,7,8]
```

#### Objetos

Para los objetos un ejemplo sencillo seria

```javascript
const obj = { user: "Frederik" };
const { user } = obj;
//esto es equivalente a  const user = obj.user
user; //frederik
```

Si queremos cambiar el nombre de la variable a uno diferente al atributo se usa la siguiente sintaxis:

```javascript
const obj = { prop1: "1", prop2: "2", prop3: "3" };

const { prop1: x, prop2: y, prop3: z } = obj;

x; // 1
y; // 2
z; // 3
```

A estos tipos de asignación cuando una variable es recién creada se le denomina `binding` o vinculación, pues variables nuevas son creadas y se les da un valor.
a la hora de hacer de-estructuración de objetos, también podemos re-asignar a valores ya existentes por ejemplo

```javascript
const numeros = [];

const obj = { a: 1, b: 2 };

({ a: numeros[0], b: numeros[1] } = obj);

numeros; // [1,2]
```

En este caso la variable `numeros` ya existe, y solo le asignamos un nuevo valor,
`a: numeros[0]` en este caso se le asigna a `numeros[0]` el valor en `obj.a`
Nota: en la re-asignación es necesario el uso de paréntesis.

Tambien es posible asignar valores a un atributo que este en partes mas "profundas" de un objeto por ejemplo:

```javascript
const user = {
  nombre: "Frederik",
  estilo: {
    colorPreferido: "#0F7AAF",
  },
};
const {
  estilo: { colorPreferido: color },
} = user;

color; //'#0F7AAF'
```

Tambien podemos tomar lo que resta del objeto de la siguiente manera

```javascript
const { a, ...others } = { a: 1, b: 2, c: 3 };
a; // 1
others; // { b:2, c:3 }
```

y podemos asignar valores por defecto en caso de que la de-estructuración no tenga el atributo presente o sea undefined.

```javascript
const [a = 1] = []; // a es 1
const { b = 2 } = { b: undefined }; // b es 2
const { c = 2 } = { c: null }; // c is null
```

#### Usos comunes de la de-estructuración

Un uso común de la de-estructuración es usarlo en valores que una función regresa, por ejemplo la función `useState` de `react`:

```javascript
const [state, setState] = useState();
```

Esta función regresa un arreglo con 2 valores, el índice 0, es una variable y el índice 1, es una función, la de-estructuración, hace que sea mas sencillo usar este tipo de funciones.

Otro uso común, es en los argumentos de funciones:

```javascript
function config({theme = "light", color = '#0F7AAF'}) {
 ...
}
config({theme:'dark'})
```

En el ejemplo anterior, la función config toma un objeto como primer argumento, este tiene 2 atributos con valores por defecto que podrán ser usados dentro de la función. En este caso al llamar la función `config`, los valores del argumento serán `theme='dark'` y `color='#0F7AAF'`, es muy practico usar este tipo de argumentos cuando el numero de argumentos empieza a crecer, a la hora de llamar a las funciones es mas sencillo ver que se esta mandando.

Otro caso para de-estructuración viene de los ciclos `for`, dare un ejemplo sencillo

```javascript
const array = [{user: "user1", email: "...", age: 55},...]
for(const { user } of array) {
console.log("user:", user)
}
```

En el ejemplo anterior, solo user es necesario, por lo tanto de-estructuramos el array, y obtenemos solo la información necesaria
