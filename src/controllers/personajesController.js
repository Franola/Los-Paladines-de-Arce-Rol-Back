import { handlePrismaError } from "../utils/prismaErrorHandler.js";
import { personajeService } from "../repository/PersonajeRepository.js";
import { usuarioService } from "../repository/UsuarioRepository.js";

const camposEnteros = [
    "nivel", "vidaActual", "vidaMaxima", "manaActual", "manaMaxima",
    "especieId", "claseId", "ramaId", "usuarioId", "fuerza", "destreza",
    "constitucion", "inteligencia", "carisma", "velocidad", "suerte",
    "sabiduria", "tamanio"
];

async function getPersonajes(req, res) {
    try {
        const personajes = await personajeService.getPersonajes();
        return res.status(200).json(personajes);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al obtener los personajes");
    }
}

async function getPersonajeById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        if (isNaN(idNumerico)) {
            return res.status(400).json({ error: "El ID proporcionado debe ser un número válido" });
        }

        const personaje = await personajeService.getPersonajeById(idNumerico);

        if (!personaje) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }

        return res.status(200).json(personaje);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al obtener el personaje");
    }
}

async function createPersonaje(req, res) {
    try {
        const personajeData = req.body;

        // Si se provee el username en el campo 'usuario', buscamos su ID correspondiente en la base de datos
        if (personajeData.usuario) {
            const usuarioObj = await usuarioService.getUsuarioByUsuario(personajeData.usuario);
            if (usuarioObj) {
                personajeData.usuarioId = usuarioObj.id;
            }
            delete personajeData.usuario;
        }

        // Parse campos numéricos
        for (const campo of camposEnteros) {
            if (personajeData[campo] !== undefined) {
                personajeData[campo] = parseInt(personajeData[campo]);
            }
        }

        // Validaciones de presencia y tipo
        if (!personajeData.nombre) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        for (const campo of camposEnteros) {
            if (personajeData[campo] === undefined || isNaN(personajeData[campo])) {
                return res.status(400).json({
                    error: `El campo '${campo}' es requerido y debe ser un número entero válido`
                });
            }
        }

        delete personajeData.id;

        const newPersonaje = await personajeService.createPersonaje(personajeData);
        
        const personajeCreado = await personajeService.getPersonajeById(newPersonaje.id);
        return res.status(201).json(personajeCreado);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al crear el personaje");
    }
}

async function updatePersonaje(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        if (isNaN(idNumerico)) {
            return res.status(400).json({ error: "El ID proporcionado debe ser un número válido" });
        }

        const personajeData = req.body;

        // Si se provee el username en el campo 'usuario', buscamos su ID correspondiente en la base de datos
        if (personajeData.usuario) {
            const usuarioObj = await usuarioService.getUsuarioByUsuario(personajeData.usuario);
            if (usuarioObj) {
                personajeData.usuarioId = usuarioObj.id;
            }
            delete personajeData.usuario;
        }

        // Parse campos numéricos
        for (const campo of camposEnteros) {
            if (personajeData[campo] !== undefined) {
                personajeData[campo] = parseInt(personajeData[campo]);
            }
        }

        // Validaciones de presencia y tipo
        if (!personajeData.nombre) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        for (const campo of camposEnteros) {
            if (personajeData[campo] === undefined || isNaN(personajeData[campo])) {
                return res.status(400).json({
                    error: `El campo '${campo}' es requerido y debe ser un número entero válido`
                });
            }
        }

        delete personajeData.id;

        const personaje = await personajeService.getPersonajeById(idNumerico);
        if (!personaje) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }

        const updatedPersonaje = await personajeService.updatePersonaje(idNumerico, personajeData);

        const personajeActualizado = await personajeService.getPersonajeById(updatedPersonaje.id);
        return res.status(200).json(personajeActualizado);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al actualizar el personaje");
    }
}

async function deletePersonaje(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        if (isNaN(idNumerico)) {
            return res.status(400).json({ error: "El ID proporcionado debe ser un número válido" });
        }

        const personaje = await personajeService.getPersonajeById(idNumerico);
        if (!personaje) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }

        await personajeService.deletePersonaje(idNumerico);

        return res.status(200).json(personaje);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al eliminar el personaje");
    }
}

export default {
    getPersonajes,
    getPersonajeById,
    createPersonaje,
    updatePersonaje,
    deletePersonaje
};