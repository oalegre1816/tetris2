const express = require("express");
const router = express.Router();

// Ruta de la página de inicio
router.get("/", (req, res) => {
  res.render("inicio"); // Renderiza la vista 'inicio.ejs'
});

// Ruta para el juego de Tetris, apuntando al controlador
router.use("/tetris", require("../controllers/tetrisController"));

module.exports = router;
