import { especieService } from "../repository/EspecieRepository.js";

async function getEspecies(req, res) {
    try{
        const especies = await especieService.getEspecies();

        return res.status(200).json(especies);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las especies" 
        });
    }
}

async function getEspecieById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const especie = await especieService.getEspecieById(idNumerico);

        if (!especie) {
            return res.status(404).json({ error: "Especie no encontrada" });
        }

        return res.status(200).json(especie);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la especie"
        });
    }
}

async function createEspecie(req, res) {
    try {
        const especieData = req.body;

        if (!especieData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete especieData.id;

        const newEspecie = await especieService.createEspecie(especieData);
        
        return res.status(201).json(newEspecie);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la especie"
        });
    }
}

async function updateEspecie(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const especieData = req.body;

        if (!especieData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete especieData.id;

        const especie = await especieService.getEspecieById(idNumerico);
        if (!especie) {
            return res.status(404).json({ error: "Especie no encontrada" });
        }

        const updatedEspecie = await especieService.updateEspecie(idNumerico, especieData);

        return res.status(200).json(updatedEspecie);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la especie"
        });
    }
}

async function deleteEspecie(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const especie = await especieService.getEspecieById(idNumerico);
        if (!especie) {
            return res.status(404).json({ error: "Especie no encontrada" });
        }

        await especieService.deleteEspecie(idNumerico);

        return res.status(200).json(especie);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la especie"
        });
    }
}

export default {
    getEspecies,
    getEspecieById,
    createEspecie,
    updateEspecie,
    deleteEspecie
};