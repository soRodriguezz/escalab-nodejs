const express = require("express");

const router = express.Router();

router.post("/auth");
router.get("/auth/total");

module.exports = router;