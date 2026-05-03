import express from "express";
import armasController from "../controllers/armasController.js";

const router = express.Router();

router.get("/", armasController.getArmas);
router.get("/:id", armasController.getArmaById);
router.post("/", armasController.createArma);
router.put("/:id", armasController.updateArma);
router.delete("/:id", armasController.deleteArma);

export default router;
