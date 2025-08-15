import express from "express";
import categoriasController from "../controllers/categoriasController.js";
import passport from 'passport';
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", categoriasController.getCategorias);
router.get("/:id", categoriasController.getCategoriaById);
router.post("/", categoriasController.createCategoria);
router.put("/:id", categoriasController.updateCategoria);
router.delete("/:id", categoriasController.deleteCategoria);

export default router;