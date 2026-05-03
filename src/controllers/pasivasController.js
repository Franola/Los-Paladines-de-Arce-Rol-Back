import { pasivaService } from "../repository/PasivaRepository.js";

async function getPasivas(req, res) {
    try{
        const pasivas = await pasivaService.getPasivas();

        return res.status(200).json(pasivas);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las pasivas" 
        });
    }
}

async function getPasivaById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const pasiva = await pasivaService.getPasivaById(idNumerico);

        if (!pasiva) {
            return res.status(404).json({ error: "Pasiva no encontrada" });
        }

        return res.status(200).json(pasiva);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la pasiva"
        });
    }
}

async function createPasiva(req, res) {
    try {
        const pasivaData = req.body;
 
        if (!pasivaData.nombre || !pasivaData.descripcion || !pasivaData.imagen) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete pasivaData.id;

        const newPasiva = await pasivaService.createPasiva(pasivaData);
        
        return res.status(201).json(newPasiva);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la pasiva: " + error.message
        });
    }
}

async function updatePasiva(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const pasivaData = req.body;

        if (!pasivaData.nombre || !pasivaData.descripcion || !pasivaData.imagen) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete pasivaData.id;

        const pasiva = await pasivaService.getPasivaById(idNumerico);
        if (!pasiva) {
            return res.status(404).json({ error: "Pasiva no encontrada" });
        }

        const updatedPasiva = await pasivaService.updatePasiva(idNumerico, pasivaData);

        return res.status(200).json(updatedPasiva);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la pasiva"
        });
    }
}

async function deletePasiva(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const pasiva = await pasivaService.getPasivaById(idNumerico);
        if (!pasiva) {
            return res.status(404).json({ error: "Pasiva no encontrada" });
        }

        await pasivaService.deletePasiva(idNumerico);

        return res.status(200).json(pasiva);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la pasiva"
        });
    }
}

export default {
    getPasivas,
    getPasivaById,
    createPasiva,
    updatePasiva,
    deletePasiva
};
