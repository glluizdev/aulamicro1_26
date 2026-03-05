const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  res.send("Olá Mundo!");
});

app.get("/:gabriel", (req, res) => {
  const { gabriel } = req.params;

  res.status(200).json({
    mensagem:`Seja Bem vindo ${gabriel}`
  });
});

app.listen(3002, () => {
  console.log("Servidor On Gabriel Almeida Luiz");
});