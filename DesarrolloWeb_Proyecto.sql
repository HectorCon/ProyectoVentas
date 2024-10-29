create database ProyectoDesarrolloWeb;

CREATE TABLE cliente (
	CodigoCliente INTEGER PRIMARY KEY auto_increment,
    NombresCliente VARCHAR(75) NOT NULL,
    ApellidosCliente VARCHAR(75) NOT NULL,
    NIT VARCHAR(20) UNIQUE NOT NULL,
    DireccionCliente VARCHAR(150),
	CategoriaCliente VARCHAR(9) NOT NULL,
    EstadoCliente BIT DEFAULT 1
);


-- Crear la tabla de proveedores
CREATE TABLE proveedor (
    CodigoProveedor INTEGER  PRIMARY KEY auto_increment,
    NombreProveedor VARCHAR(255) NOT NULL,
    TelefonoProveedor VARCHAR(20),
    DireccionProveedor VARCHAR(255),
    EstadoProveedor BIT DEFAULT 1
);

-- Crear la tabla de productos
CREATE TABLE producto (
	CodigoProducto INTEGER  PRIMARY KEY auto_increment,
    Descripcion VARCHAR(75) NOT NULL,
    CodigoProveedor INTEGER NOT NULL,
    FechaVencimiento DATE NOT NULL,
    UbicacionFisica VARCHAR(100) NOT NULL,
	ExistenciaMinima INTEGER DEFAULT 1,
	FOREIGN KEY (CodigoProveedor) REFERENCES proveedor(CodigoProveedor)
);


-- Crear la tabla de ventas
CREATE TABLE venta (
    CodigoVenta INTEGER  PRIMARY KEY auto_increment,
    CodigoCliente INTEGER NOT NULL,
    FechaVenta DATE NOT NULL,
    TipoVenta VARCHAR(10) NOT NULL,
    TotalVenta DECIMAL(10, 2) NOT NULL,
    EstadoVenta INTEGER DEFAULT 1,
    FOREIGN KEY (CodigoCliente) REFERENCES cliente(CodigoCliente)
);

-- Crear la tabla de notas de credito
CREATE TABLE notacredito (
    CodigoNotaCredito INTEGER  PRIMARY KEY auto_increment,
    CodigoVenta INTEGER NOT NULL,
    FechaNota DATE NOT NULL,
    Motivo TEXT NOT NULL,
    MontoCredito DECIMAL(10, 2) NOT NULL,
    TipoCredito INTEGER DEFAULT 1 NOT NULL,
    EstadoCredito INTEGER DEFAULT 1,
    FOREIGN KEY (CodigoVenta) REFERENCES venta(CodigoVenta)
);

-- Crear la tabla de entregas de paquete
CREATE TABLE entregapaquete (
    CodigoEntrega INTEGER  PRIMARY KEY auto_increment,
    CodigoVenta INTEGER NOT NULL,
    CodigoCliente INTEGER NOT NULL,
    FechaEntrega DATE NOT NULL,
    DireccionEntrega VARCHAR(255) NOT NULL,
    EstadoEntrega INTEGER DEFAULT 1,
    CoordenadasUbicacion VARCHAR(100),  -- Para guardar las coordenadas GPS
    FOREIGN KEY (CodigoVenta) REFERENCES venta(CodigoVenta),
    FOREIGN KEY (CodigoCliente) REFERENCES cliente(CodigoCliente)
);

-- Crear la tabla de la bitacora de entregas
CREATE TABLE bitacoraentrega (
    CodigoBitacora INTEGER  PRIMARY KEY auto_increment,
    CodigoEntrega INTEGER NOT NULL,
    FechaHora TIMESTAMP,
    Comentario TEXT,
    EstadoEntrega INTEGER NOT NULL,
    FOREIGN KEY (CodigoEntrega) REFERENCES entregapaquete(CodigoEntrega)
);


select *from cliente;
