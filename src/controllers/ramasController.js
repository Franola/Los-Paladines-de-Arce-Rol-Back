import { ramaService } from "../repository/RamaRepository.js";

async function getRamas(req, res) {
    try{
        const ramas = await ramaService.getRamas();

        return res.status(200).json(ramas);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las ramas" 
        });
    }
}

async function getRamaById(req, res) {
    try {
        const { id } = req.params;
        const rama = await ramaService.getRamaById(id);

        if (!rama) {
            return res.status(404).json({ error: "Rama no encontrada" });
        }

        return res.status(200).json(rama);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la rama"
        });
    }
}

async function createRama(req, res) {
    try {
        const ramaData = req.body;

        if (!ramaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const newRama = await ramaService.createRama(ramaData);
        
        return res.status(201).json(newRama);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la rama"
        });
    }
}

async function updateRama(req, res) {
    try {
        const { id } = req.params;
        const ramaData = req.body;

        if (!ramaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        const rama = await ramaService.getRamaById(id);
        if (!rama) {
            return res.status(404).json({ error: "Rama no encontrada" });
        }

        const updatedRama = await ramaService.updateRama(id, ramaData);

        return res.status(200).json(updatedRama);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la rama"
        });
    }
}

async function deleteRama(req, res) {
    try {
        const { id } = req.params;

        const rama = await ramaService.getRamaById(id);
        if (!rama) {
            return res.status(404).json({ error: "Rama no encontrada" });
        }

        await ramaService.deleteRama(id);

        return res.status(200).json(rama);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la rama"
        });
    }
}

export default {
    getRamas,
    getRamaById,
    createRama,
    updateRama,
    deleteRama
};