# API trpc

Este directorio contiene la implementación de la API trpc utilizada en la aplicación Next.js. La API trpc se utiliza para almacenar, organizar y compartir fragmentos de código para un acceso y reutilización fáciles.

## Estructura de archivos

- `index.ts`: Este archivo contiene la configuración de la API trpc y define los endpoints y los controladores correspondientes.

## Uso

Para utilizar la API trpc, sigue los siguientes pasos:

1. Importa el cliente trpc en tu componente o página:

```typescript
import { trpc } from 'trpc/client';
```

2. Crea una instancia del cliente trpc:

```typescript
const client = trpc.createClient({
  url: '/api/trpc',
});
```

3. Utiliza los métodos del cliente para realizar llamadas a la API:

```typescript
const response = await client.query('snippet.get', { id: 1 });
```

4. Utiliza los datos de la respuesta en tu componente o página:

```typescript
console.log(response.data);
```

## Contribución

Si deseas contribuir a la API trpc, sigue los siguientes pasos:

1. Crea una rama nueva para tu contribución:

```bash
git checkout -b feature/nueva-funcionalidad
```

2. Realiza los cambios necesarios en los archivos correspondientes.

3. Asegúrate de que los cambios pasen las pruebas unitarias:

```bash
npm test
```

4. Envía tus cambios mediante un pull request.

## Documentación adicional

Para obtener más información sobre la API trpc, consulta la documentación oficial en [enlace a la documentación](https://trpc.io/docs).

```

Recuerda que este archivo es solo un ejemplo y puedes personalizarlo según tus necesidades.