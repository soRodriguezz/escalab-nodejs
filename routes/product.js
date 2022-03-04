const express = require("express");
const router = express.Router();

const { create, listAll } = require("../controllers/product");

// routes
router.post("/product", create);
router.get("/products/:count", listAll);
// router.get("/products/total", productsCount);
// router.patch("/product/:slug", removeSoft);
// router.get("/product/:slug", read);
// router.put("/product/:slug", update);
// router.post("products", list);

module.exports = router;


// midlewares pre-procesos

// middlewares logica de negocio / controllers

// middlewares validaciones de parameters / expresss-validators
