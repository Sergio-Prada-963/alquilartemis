const {Router} = require('express');
const {getProductos, getProductosId, addProducto, deleteProducto, updateProducto} = require('../controllers/productos.controller.js');

const routerProductos = Router();

routerProductos.get("/", getProductos);
routerProductos.get("/:id", getProductosId);
routerProductos.post("/", addProducto);
routerProductos.delete("/:id", deleteProducto);
routerProductos.put("/:id", updateProducto);

module.exports = routerProductos ;