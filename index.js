const express = require("express");
const app = express();
const path = require("path");

// Configuración de vistas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configura tus rutas
const routes = require("./routes/route.js");
app.use("/", routes);

// Iniciar el servidor
const port = 3000; // Puedes usar un puerto diferente si lo deseas
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
