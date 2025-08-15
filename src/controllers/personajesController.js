import { personajeService } from "../repository/PersonajeRepository.js";

async function getPersonajes(req, res) {
    try{
        const personajes = await personajeService.getPersonajes();

        return res.status(200).json(personajes);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener los personajes" 
        });
    }
}

async function getPersonajeById(req, res) {
    try {
        const { id } = req.params;
        const personaje = await personajeService.getPersonajeById(id);

        if (!personaje) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }

        return res.status(200).json(personaje);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener el personaje"
        });
    }
}

async function createPersonaje(req, res) {
    try {
        const personajeData = req.body;

        if (!personajeData.nombre || !personajeData.clase || !personajeData.rama || !personajeData.usuario) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const newPersonaje = await personajeService.createPersonaje(personajeData);
        
        return res.status(201).json(newPersonaje);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear el personaje"
        });
    }
}

async function updatePersonaje(req, res) {
    try {
        const { id } = req.params;
        const personajeData = req.body;

        if (!personajeData.nombre || !personajeData.clase || !personajeData.rama || !personajeData.usuario) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const personaje = await personajeService.getPersonajeById(id);
        if (!personaje) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }

        const updatedPersonaje = await personajeService.updatePersonaje(id, personajeData);

        return res.status(200).json(updatedPersonaje);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el personaje"
        });
    }
}

async function deletePersonaje(req, res) {
    try {
        const { id } = req.params;

        const personaje = await personajeService.getPersonajeById(id);
        if (!personaje) {
            return res.status(404).json({ error: "Personaje no encontrado" });
        }

        await personajeService.deletePersonaje(id);

        return res.status(200).json(personaje);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el personaje"
        });
    }
}

export default {
    getPersonajes,
    getPersonajeById,
    createPersonaje,
    updatePersonaje,
    deletePersonaje
};