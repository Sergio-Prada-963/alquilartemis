const express = require('express');
const getConnection = require('./config/database.js');
const cors = require('cors');
class Server {
    constructor(){
        this.app = express();
        this.app.set("port",3309)
        this.categoriasPath = "/api/categorias";
        this.constructoraPath = "/api/constructora";
        this.cotizacionesPath = "/api/cotizaciones";
        this.empleadosPath = "/api/empleados";
        this.productosPath = "/api/productos";
        this.CxPPath = "/apiCxP/";
        this.usuariosPath = "/api/usuarios";
        this.middlewares();
        this.conexion();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    conexion(){
        getConnection();
    }
    routes(){
        this.app.use(this.categoriasPath, require('./routes/categorias.routes.js'));
        this.app.use(this.constructoraPath, require('./routes/constructora.routes.js'));
        this.app.use(this.cotizacionesPath, require('./routes/cotizaciones.routes.js'));
        this.app.use(this.empleadosPath, require('./routes/empleados.routes.js'));
        this.app.use(this.productosPath, require('./routes/productos.routes.js'));
        this.app.use(this.CxPPath, require('./routes/CxP.routes.js'));
        this.app.use(this.usuariosPath, require('./routes/usuarios.routes.js'));
    }
    listen(){
        this.app.listen(this.app.get("port"), ()=>{
            console.log(`Server funcionando en puerto ${this.app.get("port")}`);
        });
    }
}

module.exports = Server