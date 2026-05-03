import express from "express";
import pasivasController from "../controllers/pasivasController.js";

const router = express.Router();

router.get("/", pasivasController.getPasivas);
router.get("/:id", pasivasController.getPasivaById);
router.post("/", pasivasController.createPasiva);
router.put("/:id", pasivasController.updatePasiva);
router.delete("/:id", pasivasController.deletePasiva);

export default router;
