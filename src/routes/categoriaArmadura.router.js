import express from "express";
import categoriaArmaduraController from "../controllers/categoriaArmaduraController.js";

const router = express.Router();

router.get("/", categoriaArmaduraController.getCategorias);
router.get("/:id", categoriaArmaduraController.getCategoriaById);
router.post("/", categoriaArmaduraController.createCategoria);
router.put("/:id", categoriaArmaduraController.updateCategoria);
router.delete("/:id", categoriaArmaduraController.deleteCategoria);

export default router;
