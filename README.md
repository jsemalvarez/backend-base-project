# backend-base-project

## Seteo del entorno
Antes que nada, debemos instalar las dependencias definidas en el archivo `package.json`

```bash
npm install
```

## Correr los tests

- Crear db de test especificada en `.env.test` (POR UNICA VEZ)
- Actualizar el archivo `./dbscripts/create-test-db.sql` con el script de creación de la base de datos
- Correr los tests

```bash
NODE_ENV=test npm test
```

## Correr el server

- Crear archivo `.env` con la config necesaria para un entorno que NO es de test (copiar de `.env.test` y modificar)
- Crear db especificada en `.env` (POR UNICA VEZ)
- Correr el server

```bash
node server.js
```

