import express from "express";
import armadurasController from "../controllers/armadurasController.js";

const router = express.Router();

router.get("/", armadurasController.getArmaduras);
router.get("/:id", armadurasController.getArmaduraById);
router.post("/", armadurasController.createArmadura);
router.put("/:id", armadurasController.updateArmadura);
router.delete("/:id", armadurasController.deleteArmadura);

export default router;
