-- Crear la base de datos
CREATE DATABASE SistemaVentas;
GO

USE SistemaVentas;
GO

-- Tabla de Roles de Usuario
CREATE TABLE Roles (
    IdRol INT PRIMARY KEY IDENTITY(1,1),
    NombreRol VARCHAR(50) NOT NULL
);

-- Insertar roles permitidos
INSERT INTO Roles (NombreRol) VALUES ('Encargado'), ('Vendedor'), ('Delivery');

-- Tabla de Usuarios (con PasswordHash para inicio de sesión)
CREATE TABLE Usuarios (
    CodigoTrabajador INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARBINARY(64) NOT NULL, -- Hash de la contraseña para autenticación
    Telefono NVARCHAR(15),
    Puesto NVARCHAR(50),
    IdRol INT NOT NULL,
    EstadoUsuario BIT NOT NULL, -- 1 = Activo, 0 = Inactivo
    CONSTRAINT FK_Usuario_Rol FOREIGN KEY (IdRol) REFERENCES Roles(IdRol)
);

-- Tabla de Productos
CREATE TABLE Productos (
    SKU INT PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Tipo NVARCHAR(50),
    Etiqueta NVARCHAR(50),
    Precio DECIMAL(10, 2) NOT NULL,
    Unidad INT NOT NULL -- Stock disponible
);

-- Tabla de Estados de Pedido
CREATE TABLE EstadosPedido (
    IdEstado INT PRIMARY KEY IDENTITY(1,1),
    NombreEstado NVARCHAR(50) NOT NULL
);

-- Insertar estados permitidos
INSERT INTO EstadosPedido (NombreEstado) VALUES ('Por atender'), ('En proceso'), ('Entregado');

-- Tabla de Pedidos
CREATE TABLE Pedidos (
    NroPedido INT PRIMARY KEY IDENTITY(1,1),
    FechaPedido DATE NOT NULL,
    FechaDespacho DATE,
    FechaEntrega DATE,
    IdVendedor INT NOT NULL,
    IdDelivery INT,
    IdEstado INT NOT NULL,
    CONSTRAINT FK_Pedido_Vendedor FOREIGN KEY (IdVendedor) REFERENCES Usuarios(CodigoTrabajador),
    CONSTRAINT FK_Pedido_Delivery FOREIGN KEY (IdDelivery) REFERENCES Usuarios(CodigoTrabajador),
    CONSTRAINT FK_Pedido_Estado FOREIGN KEY (IdEstado) REFERENCES EstadosPedido(IdEstado)
);

-- Tabla de Productos en cada Pedido (relación muchos a muchos entre Pedidos y Productos)
CREATE TABLE PedidoProductos (
    NroPedido INT NOT NULL,
    SKU INT NOT NULL,
    Cantidad INT NOT NULL,
    PrecioUnitario DECIMAL(10, 2) NOT NULL, -- Precio del producto en el momento del pedido
    PRIMARY KEY (NroPedido, SKU),
    CONSTRAINT FK_PedidoProducto_Pedido FOREIGN KEY (NroPedido) REFERENCES Pedidos(NroPedido),
    CONSTRAINT FK_PedidoProducto_Producto FOREIGN KEY (SKU) REFERENCES Productos(SKU)
);
