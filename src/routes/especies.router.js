import express from "express";
import especiesController from "../controllers/especiesController.js";

const router = express.Router();

router.get("/", especiesController.getEspecies);
router.get("/:id", especiesController.getEspecieById);
router.post("/", especiesController.createEspecie);
router.put("/:id", especiesController.updateEspecie);
router.delete("/:id", especiesController.deleteEspecie);

export default router;