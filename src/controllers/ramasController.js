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
        const idNumerico = parseInt(id);
        const rama = await ramaService.getRamaById(idNumerico);

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

        delete ramaData.id;

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
        const idNumerico = parseInt(id);
        const ramaData = req.body;

        if (!ramaData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete ramaData.id;

        const rama = await ramaService.getRamaById(idNumerico);
        if (!rama) {
            return res.status(404).json({ error: "Rama no encontrada" });
        }

        const updatedRama = await ramaService.updateRama(idNumerico, ramaData);

        return res.status(200).json(updatedRama);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la rama: " + error.message
        });
    }
}

async function deleteRama(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const rama = await ramaService.getRamaById(idNumerico);
        if (!rama) {
            return res.status(404).json({ error: "Rama no encontrada" });
        }

        await ramaService.deleteRama(idNumerico);

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