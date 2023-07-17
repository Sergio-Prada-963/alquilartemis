const {Router} = require('express');
const {getCotizaciones, getCotizacionesId, addCotizacion, deleteCotizacion, updateCotizacion} = require('../controllers/cotizaciones.controller.js');

const routerCotizaciones = Router();

routerCotizaciones.get("/", getCotizaciones);
routerCotizaciones.get("/:id", getCotizacionesId);
routerCotizaciones.post("/", addCotizacion);
routerCotizaciones.delete("/:id", deleteCotizacion);
routerCotizaciones.put("/:id", updateCotizacion);

module.exports = routerCotizaciones ;