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
            error: "Error al obtener las usuarios" 
        });
    }
}

async function getUsuarioById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.getUsuarioById(id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrada" });
        }

        return res.status(200).json(usuario);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la usuario"
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
        const usuarioData = req.body;

        if (!usuarioData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const usuario = await usuarioService.getUsuarioById(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrada" });
        }

        const updatedUsuario = await usuarioService.updateUsuario(id, usuarioData);

        return res.status(200).json(updatedUsuario);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la usuario"
        });
    }
}

async function deleteUsuario(req, res) {
    try {
        const { id } = req.params;

        const usuario = await usuarioService.getUsuarioById(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrada" });
        }

        await usuarioService.deleteUsuario(id);

        return res.status(200).json(usuario);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la usuario"
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