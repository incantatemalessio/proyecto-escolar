# Proyecto escolar

@

Servidor API REST para llevar un control de calificaciones de los respectivos alumnos, incluye **Login**, **Registro de profesores**, **Lista de calificaciones por profesor**, **Registro de calificaciones por alumno**, **Actualizacion y eliminación de calificaciones** y **Reporte general de calificaciones**

## login

> METHOD=POST
> URI='http://localhost:3100/api/user/login'
> BODY={"email": "correo@ejemplo.com", "password": "12345"}

```
curl -d BODY -H "Content-Type: application/json" -X METHOD URI
```

## signup

> METHOD=POST
> URI=http://localhost:3100/api/user/signup
> BODY={"email": "String", "password": "String", "name":"String", "invitacion": "String"}

```
curl -d BODY -H "Content-Type: application/json" -X METHOD URI
```

## nuevaCalificacion

> METHOD=POST
> URI='http://localhost:3100/api/alumno/registrarNota'
> BODY={"professorId": "String","alumno": "String","materia": "String","nota": "Number","descripcion": "String","asistencias": "Number","matricula": "String"}

```
curl -d BODY -H "Content-Type: application/json" -X METHOD URI
```

## obtenerCalificacion

> METHOD=GET
> URI='http://localhost:3100/api/alumno/obtenerCalificacion'
> BODY=id=String

```
curl -d URI+BODY -H -X METHOD URI
```

## obtenerCalificaciones

> METHOD=GET
> URI='http://localhost:3100/api/alumno/obtenerCalificaciones'

```
curl -d URI -H -X METHOD URI
```

## obtenerCalificacionesPorProfesor

> METHOD=GET
> URI='http://localhost:3100/api/alumno/obtenerCalificacionesPorProfesor'
> BODY=id=String

```
curl -d URI+BODY -H -X METHOD URI
```

## eliminarCalificacion

> METHOD=PUT
> URI='http://localhost:3100/api/alumno/eliminarCalificacion'
> BODY={"id": "String"}

```
curl -d BODY -H "Content-Type: application/json" -X METHOD URI
```

## actualizarCalificacion

> METHOD=PUT
> URI='http://localhost:3100/api/alumno/actualizarCalificacion'
> BODY={"\_id": "String","alumno": "String","materia": "String","nota": "Number","descripcion": "String","asistencias": "Number","matricula": "String"}

```
curl -d BODY -H "Content-Type: application/json" -X METHOD URI
```
