# Identificador

En JavaScript, las variables, constantes, nombres de funciones y cualquier etiqueta que puedas nombrar tiene que apegarse a ciertas reglas:

- Identificadores pueden contener, letras, dígitos, guiones bajos, y signos de dollar
- Identificadores solo pueden empezar con letras, guiones bajos o signos de dollar.
- Identificadores son sensibles a mayúsculas y minúsculas
- Palabras reservadas no pueden ser usadas como identificadores

| abstract     | arguments | async \*   | await \*   |
| ------------ | --------- | ---------- | ---------- |
| boolean      | break     | byte       | case       |
| catch        | char      | class \*   | const \*   |
| continue     | debugger  | default    | delete     |
| do           | double    | else       | enum \*    |
| eval         | export \* | extends \* | false      |
| final        | finally   | float      | for        |
| function     | goto      | if         | implements |
| function     | import \* | in         | instanceof |
| int          | interface | let \*     | long       |
| native       | new       | null       | package    |
| private      | protected | public     | return     |
| short        | static    | super \*   | switch     |
| synchronized | this      | throw      | throws     |
| transient    | true      | try        | typeof     |
| using \*     | var       | void       | volatile   |
| while        | with      | yield      |            |

En el siguiente ejemplo mostrare casos de nombres validos y no validos:

```javascript
// Validos
NombreDeVariable;// Valido
_variable;// Valido
$Variable;// Valido
nombre_de_variable;// Valido

// Invalidos
nombre-de-variable;// Invalido
9Otro;// Invalido
with;// Invalido
```
