import express from "express";
import notificacionesController from "../controllers/notificacionesController.js";
import passport from 'passport';
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", notificacionesController.getNotificaciones);
router.get("/:id", notificacionesController.getNotificacionById);
router.get("/usuario/:user", notificacionesController.getNotificacionByUser);
router.post("/", notificacionesController.createNotificacion);
router.put("/:id", notificacionesController.updateNotificacion);
router.delete("/:id", notificacionesController.deleteNotificacion);

export default router;