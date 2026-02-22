import express from "express";
import tiposArmaduraController from "../controllers/tiposArmaduraController.js";

const router = express.Router();

router.get("/", tiposArmaduraController.getTiposArmadura);
router.get("/:id", tiposArmaduraController.getTipoArmaduraById);
router.post("/", tiposArmaduraController.createTipoArmadura);
router.put("/:id", tiposArmaduraController.updateTipoArmadura);
router.delete("/:id", tiposArmaduraController.deleteTipoArmadura);

export default router;