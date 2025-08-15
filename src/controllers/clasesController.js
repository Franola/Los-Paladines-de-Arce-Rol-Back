import { claseService } from "../repository/ClaseRepository.js";

async function getClases(req, res) {
    try{
        const clases = await claseService.getClases();

        return res.status(200).json(clases);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las clases" 
        });
    }
}

async function getClaseById(req, res) {
    try {
        const { id } = req.params;
        const clase = await claseService.getClaseById(id);

        if (!clase) {
            return res.status(404).json({ error: "Clase no encontrada" });
        }

        return res.status(200).json(clase);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la clase"
        });
    }
}

async function createClase(req, res) {
    try {
        const claseData = req.body;

        if (!claseData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const newClase = await claseService.createClase(claseData);
        
        return res.status(201).json(newClase);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la clase"
        });
    }
}

async function updateClase(req, res) {
    try {
        const { id } = req.params;
        const claseData = req.body;

        if (!claseData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const clase = await claseService.getClaseById(id);
        if (!clase) {
            return res.status(404).json({ error: "Clase no encontrada" });
        }

        const updatedClase = await claseService.updateClase(id, claseData);

        return res.status(200).json(updatedClase);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la clase"
        });
    }
}

async function deleteClase(req, res) {
    try {
        const { id } = req.params;

        const clase = await claseService.getClaseById(id);
        if (!clase) {
            return res.status(404).json({ error: "Clase no encontrada" });
        }

        await claseService.deleteClase(id);

        return res.status(200).json(clase);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la clase"
        });
    }
}

export default {
    getClases,
    getClaseById,
    createClase,
    updateClase,
    deleteClase
};