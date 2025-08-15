import express from "express";
import ramasController from "../controllers/ramasController.js";
import passport from 'passport';
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", ramasController.getRamas);
router.get("/:id", ramasController.getRamaById);
router.post("/", ramasController.createRama);
router.put("/:id", ramasController.updateRama);
router.delete("/:id", ramasController.deleteRama);

export default router;