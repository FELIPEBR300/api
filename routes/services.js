const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

// Criar um novo serviço
router.post("/services", serviceController.create);

// Buscar todos os serviços
router.get("/services", serviceController.getAll);

// Buscar um serviço por ID
router.get("/services/:id", serviceController.get);

// Atualizar um serviço por ID
router.put("/services/:id", serviceController.update);

// Deletar um serviço por ID
router.delete("/services/:id", serviceController.delete);

module.exports = router;
