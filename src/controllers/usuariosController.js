import { usuarioService } from "../repository/UsuarioRepository.js";
import jwt from "jsonwebtoken";
import { UserDTO } from "../dto/UserDTO.js";

async function getUsuarios(req, res) {
    try{
        const usuarios = await usuarioService.getUsuarios();

        return res.status(200).json(usuarios);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener los usuarios" 
        });
    }
}

async function getUsuarioById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const usuario = await usuarioService.getUsuarioById(idNumerico);

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json(usuario);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener el usuario"
        });
    }
}

async function createUsuario(req, res) {
    return res.status(201).json({
        usuarioCreado: req.user
    });
}

async function login(req, res) {
    let usuario = new UserDTO(req.user);

    let token = jwt.sign({ ...usuario }, "Fciarallo22", {expiresIn: '1h'});

    res.cookie("cookieToken", token, {httpOnly: true});
    return res.status(200).json({
        usuarioLogueado: usuario
    });
}

async function logout(req, res) {
    res.clearCookie("cookieToken");
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({ message: "Sesión cerrada correctamente" });
}

async function currentUser(req, res) {
    let usuario= new UserDTO(req.user)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        usuarioLogueado:usuario
    });
}

async function updateUsuario(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const usuarioData = req.body;

        if (!usuarioData.usuario || !usuarioData.rol) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const usuario = await usuarioService.getUsuarioById(idNumerico);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        
        const updatedUsuario = await usuarioService.updateUsuario(idNumerico, usuarioData);

        return res.status(200).json(updatedUsuario);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el usuario: " + error.message
        });
    }
}

async function deleteUsuario(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const usuario = await usuarioService.getUsuarioById(idNumerico);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        await usuarioService.deleteUsuario(idNumerico);

        return res.status(200).json(usuario);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el usuario"
        });
    }
}

export default {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    login,
    logout,
    currentUser,
    updateUsuario,
    deleteUsuario
};