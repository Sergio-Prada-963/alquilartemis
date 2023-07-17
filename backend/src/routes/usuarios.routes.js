const {Router} = require('express');
const {getUsuarios, addUsuario, deleteUsuario, updateUsuario} = require('../controllers/usuarios.controller.js');

const routerUsuarios = Router();

routerUsuarios.get("/", getUsuarios);
routerUsuarios.post("/", addUsuario);
routerUsuarios.delete("/:id", deleteUsuario);
routerUsuarios.put("/:id", updateUsuario);

module.exports = routerUsuarios;