const express = require("express");
const router = express.Router();

const { create, list, read, update, remove, removeSoft } = require("../controllers/category");

// PRINCIPIO SOLID: Inyección de Dependencias
// PRINCIPIO SOLID: Inversión de Dependencias
// endpoints
router.post("/category", create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update);
router.delete("/category/:slug", remove);
router.patch("/category/:slug", removeSoft);

module.exports = router;
