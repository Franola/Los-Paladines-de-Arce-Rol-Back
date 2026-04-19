import express from "express";
import hechizosController from "../controllers/hechizosController.js";

const router = express.Router();

router.get("/", hechizosController.getHechizos);
router.get("/:id", hechizosController.getHechizoById);
router.post("/", hechizosController.createHechizo);
router.put("/:id", hechizosController.updateHechizo);
router.delete("/:id", hechizosController.deleteHechizo);

export default router;