const express = require("express");
const app = express();
const port = 3000;
const ejemploRoutes = require("./routes/route");

// Configurar vistas EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Usar las rutas definidas en ejemploRoutes
app.use("/", ejemploRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
