import express from "express";
import clasesController from "../controllers/clasesController.js";
import passport from 'passport';
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", clasesController.getClases);
router.get("/:id", clasesController.getClaseById);
router.post("/", clasesController.createClase);
router.put("/:id", clasesController.updateClase);
router.delete("/:id", clasesController.deleteClase);

export default router;