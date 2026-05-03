import express from "express";
import objetosController from "../controllers/objetosController.js";

const router = express.Router();

router.get("/", objetosController.getObjetos);
router.get("/:id", objetosController.getObjetoById);
router.post("/", objetosController.createObjeto);
router.put("/:id", objetosController.updateObjeto);
router.delete("/:id", objetosController.deleteObjeto);

export default router;
