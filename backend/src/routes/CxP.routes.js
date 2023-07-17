const {Router} = require('express');
const {getCxP, getCxPId, addCxP, deleteCxP, updateCxP} = require('../controllers/CxP.controllers.js');

const routerCotxPro = Router();

routerCotxPro.get("/", getCxP);
routerCotxPro.get("/:id", getCxPId);
routerCotxPro.post("/", addCxP);
routerCotxPro.delete("/:id", deleteCxP);
routerCotxPro.put("/:id", updateCxP);

module.exports = routerCotxPro;