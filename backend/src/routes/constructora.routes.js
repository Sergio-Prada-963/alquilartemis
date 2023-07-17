const {Router} = require('express');
const {getConstructora, getConstructoraId, addConstructora, deleteConstructora, updateConstructora} = require('../controllers/constructora.controller.js');

const routerConstructora = Router();

routerConstructora.get("/", getConstructora);
routerConstructora.get("/:id", getConstructoraId);
routerConstructora.post("/", addConstructora);
routerConstructora.delete("/:id", deleteConstructora);
routerConstructora.put("/:id", updateConstructora);

module.exports = routerConstructora ;