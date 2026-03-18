# ejercicios-programacion

Ejercicios en javascript (DENO) de programacion para principiantes

# Deno

Para estas pruebas/ejercicios uso el entorno de ejecución Deno, si no lo tienes
instalado puedes ir a
[instalar Deno](https://docs.deno.com/runtime/getting_started/installation/), Si
usas windows, es muy probable que el siguiente comando sea suficiente, despues
de la instalación podras ejecutar `deno` en cualquier nueva terminal que abras

```
irm https://deno.land/install.ps1 | iex
```

## Ejecutar pruebas (tests)

Este repositorio incluye scripts de prueba usando el runner de tests integrado
de **Deno**.

### Ejecutar todas las pruebas

```bash
deno test ./**/**.js
```

### Ejecutar pruebas de un archivo específico

```bash
deno test Ifs/if-1.js
# o
deno test Ifs/pares.js
# o
deno test Ifs/division.js
```
