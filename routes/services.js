const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

router.route("/services")
    .post(serviceController.create);


    router.route("/services").get((req, res) => serviceController.getAll(req, res));

    router.route("/services/:id").get((req, res) => serviceController.getAll(req, res));

module.exports = router;
