const {Router} = require('express');
const {getEmpleados, getEmpleadosId, addEmpleado, deleteEmpleado, updateEmpleado} = require('../controllers/empleados.controller.js');

const routerEmpleados = Router();

routerEmpleados.get("/", getEmpleados);
routerEmpleados.get("/:id", getEmpleadosId);
routerEmpleados.post("/", addEmpleado);
routerEmpleados.delete("/:id", deleteEmpleado);
routerEmpleados.put("/:id", updateEmpleado);

module.exports =routerEmpleados ;