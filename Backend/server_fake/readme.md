¿Que significa status 201 created?
¿Como verifico la actualizacion de los datos por mmedio de la terminal?
¿Cuales son los status existentes y comunes?
¿Cuando hacer una peticion tipo PATCH?
¿Que es SOAP, cuales somn las diferencias con REST?
¿Que es GraphQL, cuales son las diferencias con REST?

                   SOLUCION

Indica que una solicitud fue exitosa y que como resultado se creó un nuevo recurso en el servido

Básicamente vuelves a consultar el mismo recurso y revisas si los datos ya cambiaron. Si ves los cambios, entonces sí se actualizo

200s: todo bien
300s: redirecciones
400s: error del cliente (algo hiciste mal en la petición)
500s: error del servidor (fallo del backend)

Cuando quieres cambiar solo una parte de algo, no todo el recurso completo

SOAP es un protocolo más estricto que usa XML.
REST es un estilo más flexible que usa HTTP y distintos formatos

GraphQL te deja pedir exactamente lo que necesitas en una sola consulta.
REST a veces te da datos de más o te obliga a hacer varias peticiones