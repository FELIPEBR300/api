const router = require("express").Router();

const servicesRouter = require("./services");

router.use("/", servicesRouter);

// parties routes
const PartyRouter = require("./parties")

router.use("/", PartyRouter);

module.exports = router;