const express = require("express");
const router = express.Router();
const salaRouter = require("./routers/salaRouter");
const usuarioRouter = require("./routers/usuarioRouter")

router.use("/salas", salaRouter);
router.use("/usuario", usuarioRouter);

router.get("/", (req, res) =>{
    res.status(200).send({
        "nome": "API - CHAT",
        "versao": "1.0"
    })
})

module.exports = router
