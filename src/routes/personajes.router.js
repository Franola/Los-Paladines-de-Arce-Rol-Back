import express from "express";
import personajesController from "../controllers/personajesController.js";
import passport from 'passport';
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", personajesController.getPersonajes);
router.get("/:id", personajesController.getPersonajeById);
router.post("/", personajesController.createPersonaje);
router.put("/:id", personajesController.updatePersonaje);
router.delete("/:id", personajesController.deletePersonaje);

export default router;