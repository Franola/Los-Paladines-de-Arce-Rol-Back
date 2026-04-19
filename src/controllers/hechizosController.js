import { hechizoService } from "../repository/HechizoRepository.js";

async function getHechizos(req, res) {
    try{
        const hechizos = await hechizoService.getHechizos();

        return res.status(200).json(hechizos);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener los hechizos" 
        });
    }
}

async function getHechizoById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const hechizo = await hechizoService.getHechizoById(idNumerico);

        if (!hechizo) {
            return res.status(404).json({ error: "Hechizo no encontrado" });
        }

        return res.status(200).json(hechizo);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener el hechizo"
        });
    }
}

async function createHechizo(req, res) {
    try {
        const hechizoData = req.body;
 
        if (!hechizoData.nombre || hechizoData.mana < 0 || hechizoData.danio < 0 || !hechizoData.claseId || !hechizoData.imagen) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete hechizoData.id;

        const newHechizo = await hechizoService.createHechizo(hechizoData);
        
        return res.status(201).json(newHechizo);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear el hechizo: " + error.message
        });
    }
}

async function updateHechizo(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const hechizoData = req.body;

        if (!hechizoData.nombre || !hechizoData.descripcion || !hechizoData.mana || !hechizoData.danio || !hechizoData.claseId || !hechizoData.imagen) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete hechizoData.id;

        const hechizo = await hechizoService.getHechizoById(idNumerico);
        if (!hechizo) {
            return res.status(404).json({ error: "Hechizo no encontrado" });
        }

        const updatedHechizo = await hechizoService.updateHechizo(idNumerico, hechizoData);

        return res.status(200).json(updatedHechizo);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el hechizo"
        });
    }
}

async function deleteHechizo(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const hechizo = await hechizoService.getHechizoById(idNumerico);
        if (!hechizo) {
            return res.status(404).json({ error: "Hechizo no encontrado" });
        }

        await hechizoService.deleteHechizo(idNumerico);

        return res.status(200).json(hechizo);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el hechizo"
        });
    }
}

export default {
    getHechizos,
    getHechizoById,
    createHechizo,
    updateHechizo,
    deleteHechizo
};