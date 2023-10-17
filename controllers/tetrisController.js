const express = require("express");
const router = express.Router();

// Lógica relacionada con Tetris
// Por ejemplo, cargar el juego, manejar puntuaciones, etc.

// Ruta para renderizar la vista de Tetris
router.get("/", (req, res) => {
  res.render("tetris"); // Renderiza la vista 'tetris.ejs'
});

module.exports = router;
