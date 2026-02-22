import express from "express";
import materialController from "../controllers/materialesController.js";

const router = express.Router();

router.get("/", materialController.getMateriales);
router.get("/:id", materialController.getMaterialById);
router.post("/", materialController.createMaterial);
router.put("/:id", materialController.updateMaterial);
router.delete("/:id", materialController.deleteMaterial);

export default router;