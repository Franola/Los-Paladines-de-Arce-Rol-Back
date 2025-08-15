import express from "express";
import usuariosController from "../controllers/usuariosController.js";
import passport from 'passport';
// import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", usuariosController.getUsuarios);
router.post("/register", passport.authenticate("register", {session:false, failureRedirect:"/error"}), usuariosController.createUsuario);
router.post("/login", passport.authenticate("login", {session:false, failureRedirect:"/error"}), usuariosController.login);
router.post("/logout", usuariosController.logout);
router.get("/current", passport.authenticate("current", {session:false, failureRedirect:"/error"}), usuariosController.currentUser);
router.put("/:id", usuariosController.updateUsuario);
router.delete("/:id", usuariosController.deleteUsuario);

export default router;