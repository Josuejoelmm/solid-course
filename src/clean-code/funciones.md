Para en nombre, una funcion debe llamarse por lo que hace y por lo que es, debería empezar con el verbo ejemplo:

```ts
function sendEmail(toWhom: string): boolean {...}
```

cuando se declara una función, lo que esta pueda recibir se llama "Parámetros" y cuando se invoca se le llama "Argumentos".

Se recomienda NO usar mas de 3 parámetros (si es posible), o en el caso de usar TypeScript usar una interface para tener mas resumidos los parametros.

# Otras recomendaciones:
- Simplicidad es fundamental.
- Funciones de tamaño reducido.
- Funciones de una sola línea SIN causar complejidad.
- Menos de 20 líneas.
- Evita el uso del "else".
- Prioriza el uso de la condicional ternaria.
