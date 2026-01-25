import { notificacionService } from "../repository/NotificacionRepository.js";
import { usuarioService } from "../repository/UsuarioRepository.js";

async function getNotificaciones(req, res) {
    try{
        const notificaciones = await notificacionService.getNotificaciones();

        return res.status(200).json(notificaciones);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las notificaciones" 
        });
    }
}

async function getNotificacionById(req, res) {
    try {
        const { id } = req.params;
        const notificacion = await notificacionService.getNotificacionById(id);

        if (!notificacion) {
            return res.status(404).json({ error: "Notificacion no encontrada" });
        }

        return res.status(200).json(notificacion);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la notificacion"
        });
    }
}

async function getNotificacionByUser(req, res) {
    try {
        const { user } = req.params;
        console.log("user", user);
        const usuario = await usuarioService.getUsuarioByUsuario(user);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        console.log("usuario", usuario);
        const notificaciones = await notificacionService.getNotificacionByUser(usuario._id);
        if (!notificaciones) {
            return res.status(404).json({ error: "Notificaciones no encontradas" });
        }
        console.log("notificaciones", notificaciones);

        return res.status(200).json({result: notificaciones });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error al obtener las notificaciones"
        });
    }
}

async function createNotificacion(req, res) {
    try {
        const notificacionData = req.body;

        if(!notificacionData.tipo){
            return res.status(400).json({
                error: "Falta el tipo de notificación"
            });
        }
        if(!notificacionData.usuario){
            return res.status(400).json({
                error: "Falta el usuario de la notificación"
            });
        }

        if(notificacionData.tipo == "Selección de carta"){
            if (!notificacionData.cartas || !Array.isArray(notificacionData.cartas)) {
                return res.status(400).json({
                    error: "Faltan datos requeridos"
                });
            }
        }

        delete notificacionData._id;

        const newNotificacion = await notificacionService.createNotificacion(notificacionData);
        
        return res.status(201).json(newNotificacion);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear el notificación"
        });
    }
}

async function updateNotificacion(req, res) {
    try {
        const { id } = req.params;
        const notificacionData = req.body;

        if (!notificacionData.usuario || !notificacionData.tipo) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const notificacion = await notificacionService.getNotificacionById(id);
        if (!notificacion) {
            return res.status(404).json({ error: "Notificacion no encontrado" });
        }

        const updatedNotificacion = await notificacionService.updateNotificacion(id, notificacionData);

        return res.status(200).json(updatedNotificacion);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el notificacion"
        });
    }
}

async function deleteNotificacion(req, res) {
    try {
        const { id } = req.params;

        const notificacion = await notificacionService.getNotificacionById(id);
        if (!notificacion) {
            return res.status(404).json({ error: "Notificacion no encontrado" });
        }

        await notificacionService.deleteNotificacion(id);

        return res.status(200).json(notificacion);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el notificacion"
        });
    }
}

export default {
    getNotificaciones,
    getNotificacionById,
    getNotificacionByUser,
    createNotificacion,
    updateNotificacion,
    deleteNotificacion
};