const express = require ("express");
const path = require ("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "docs", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "docs", "index.html"));
});

app.listen(process.env.PORT || 9000, () => console.log("Servidor funcionando"));