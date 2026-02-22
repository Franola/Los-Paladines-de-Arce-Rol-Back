import express from "express";
import categoriasArmaController from "../controllers/categoriasArmaController.js";

const router = express.Router();

router.get("/", categoriasArmaController.getCategoriasArma);
router.get("/:id", categoriasArmaController.getCategoriaArmaById);
router.post("/", categoriasArmaController.createCategoriaArma);
router.put("/:id", categoriasArmaController.updateCategoriaArma);
router.delete("/:id", categoriasArmaController.deleteCategoriaArma);

export default router;