const express = require("express");
const router = express.Router();
const { create, list, read, update, remove, removeSoft } = require("../controllers/category");

// routes - Principio solid, inyeccion de dependecias, inversion de dependecias
router.post("/category", create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update); // falta agregar el  status en el controller
router.delete("/category/:slug", remove);
router.patch("/category/:slug", removeSoft);

module.exports = router;