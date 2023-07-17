const {Router} = require('express');
const {getCategoria, addCategoria, getCategoriaId, deleteCategoria, updateCategoria} = require('../controllers/categoria.controller.js');

const routerCategoria = Router();

routerCategoria.get("/", getCategoria);
routerCategoria.get("/:id", getCategoriaId);
routerCategoria.post("/", addCategoria);
routerCategoria.delete("/:id", deleteCategoria);
routerCategoria.put("/:id", updateCategoria);

module.exports = routerCategoria;