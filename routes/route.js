// Ejemplo de archivo de rutas
const express = require("express");
const router = express.Router();
const ejemploController = require("../controllers/controller");

// Ruta principal
router.get("/", ejemploController.index);
module.exports = router;
