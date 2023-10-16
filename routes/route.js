const express = require("express");
const router = express.Router();

// Ruta de la página de inicio
router.get("/", (req, res) => {
  res.render("inicio"); // Renderiza la vista 'inicio.ejs'
});

// Ruta a la pagina de tetris
router.get("/tetris", (req, res) => {
  res.render("tetris"); // Renderiza la vista 'tetris.ejs'
});

module.exports = router;
