import express from "express";
import comidasController from "../controllers/comidasController.js";

const router = express.Router();

router.get("/", comidasController.getComidas);
router.get("/:id", comidasController.getComidaById);
router.post("/", comidasController.createComida);
router.put("/:id", comidasController.updateComida);
router.delete("/:id", comidasController.deleteComida);

export default router;
