# Sistema de Ventas

Sistema de Ventas es un proyecto de administración de productos y pedidos desarrollado en ASP.NET con C# para el backend y Angular para el frontend. Este sistema utiliza JWT y permisos basados en roles para controlar el acceso a diferentes funcionalidades.

## Requisitos previos

Para ejecutar este proyecto, asegúrate de tener las siguientes herramientas instaladas:

- [SQL Server](https://www.microsoft.com/es-es/sql-server/sql-server-downloads)
- [Visual Studio 2022](https://visualstudio.microsoft.com/es/vs/) con .NET SDK
- [Node.js y npm](https://nodejs.org/) (incluye npm)
- [Angular CLI](https://angular.io/cli)

## Configuración del Proyecto

### Paso 1: Crear la Base de Datos

1. Abre SQL Server Management Studio (SSMS) y conéctate a tu servidor SQL.
2. Ejecuta el script `SistemaVentas.sql` en tu servidor SQL para crear la base de datos y las tablas necesarias.
   - **Nota**: Este script debe crear una base de datos llamada `SistemaVentas` y configurarla en el servidor `JECR` usando autenticación de Windows.

### Paso 2: Configurar el Backend (ASP.NET)

1. Abre el proyecto en Visual Studio 2022 (en el puerto predeterminado, por ejemplo, 7194).
2. Verifica que el archivo `appsettings.json` contenga la cadena de conexión correcta a tu base de datos.
   - La cadena de conexión debería apuntar al servidor `JECR` y la base de datos `SistemaVentas`.
3. Restaura las dependencias del proyecto, si es necesario, usando el siguiente comando en la Consola del Administrador de Paquetes de Visual Studio:
   ```bash
   Update-Package


Este README incluye los pasos básicos para levantar el proyecto y ayuda a los nuevos desarrolladores a comprender las configuraciones necesarias, junto con enlaces a las herramientas requeridas.
