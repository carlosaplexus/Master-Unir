const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors"); //por estar en puertos distintos el back y el front

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Conexión Mongo
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/test";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB conectado:", mongoUrl))
  .catch((err) => console.error("Error conectando a Mongo:", err));

// Rutas API
const itemsRouter = require("./routes/items");
app.use("/api/items", itemsRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor Node escuchando en puerto ${PORT}`));
