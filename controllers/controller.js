// Ejemplo de un controlador
const ejemploController = {};

ejemploController.index = (req, res) => {
  res.render("view"); // Renderiza una vista llamada 'index'
};

module.exports = ejemploController;
