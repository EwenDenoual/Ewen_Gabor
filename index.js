const express = require("express");

const app = express();
const PORT = 3000;

// Route minimale
app.get("/", (req, res) => {
  res.send("Serveur Express opérationnel 🚀");
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
