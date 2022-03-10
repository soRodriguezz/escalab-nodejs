const express = require("express");
const router = express.Router();


// routes
router.post("/auth");
router.get("/auth/pendiente");


module.exports = router;