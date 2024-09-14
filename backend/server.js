const express = require("express");
const cors = require("cors");
const app = express(); // estou estou instaciando o express
const port = 3000; // estou definindo a porta

// estou dizendo para o express que ele deve usar o cors
app.use(cors());
// estou dizendo para o express que ele deve usar json
app.use(express.json());
// estou dizendo para o express que ele deve usar urlencoded
// que serve para enviar formulários via post
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port);
})