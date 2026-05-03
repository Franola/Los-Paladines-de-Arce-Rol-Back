import { armaduraService } from "../repository/ArmaduraRepository.js";

async function getArmaduras(req, res) {
    try{
        const armaduras = await armaduraService.getArmaduras();

        return res.status(200).json(armaduras);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener las armaduras" 
        });
    }
}

async function getArmaduraById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const armadura = await armaduraService.getArmaduraById(idNumerico);

        if (!armadura) {
            return res.status(404).json({ error: "Armadura no encontrada" });
        }

        return res.status(200).json(armadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener la armadura"
        });
    }
}

async function createArmadura(req, res) {
    try {
        const armaduraData = req.body;

        if (armaduraData.peso !== undefined) armaduraData.peso = parseInt(armaduraData.peso);
        if (armaduraData.categoriaArmaduraId !== undefined) armaduraData.categoriaArmaduraId = parseInt(armaduraData.categoriaArmaduraId);
        if (armaduraData.tipoArmaduraId !== undefined) armaduraData.tipoArmaduraId = parseInt(armaduraData.tipoArmaduraId);
        if (armaduraData.materialId !== undefined) armaduraData.materialId = parseInt(armaduraData.materialId);

        if (!armaduraData.nombre || !armaduraData.descripcion || !armaduraData.imagen || armaduraData.peso < 0 || !armaduraData.categoriaArmaduraId || !armaduraData.tipoArmaduraId || !armaduraData.materialId) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete armaduraData.id;

        const newArmadura = await armaduraService.createArmadura(armaduraData);
        
        return res.status(201).json(newArmadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear la armadura: " + error.message
        });
    }
}

async function updateArmadura(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const armaduraData = req.body;

        if (armaduraData.peso !== undefined) armaduraData.peso = parseInt(armaduraData.peso);
        if (armaduraData.categoriaArmaduraId !== undefined) armaduraData.categoriaArmaduraId = parseInt(armaduraData.categoriaArmaduraId);
        if (armaduraData.tipoArmaduraId !== undefined) armaduraData.tipoArmaduraId = parseInt(armaduraData.tipoArmaduraId);
        if (armaduraData.materialId !== undefined) armaduraData.materialId = parseInt(armaduraData.materialId);

        if (!armaduraData.nombre || !armaduraData.descripcion || !armaduraData.imagen || armaduraData.peso < 0 || !armaduraData.categoriaArmaduraId || !armaduraData.tipoArmaduraId || !armaduraData.materialId) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete armaduraData.id;

        const armadura = await armaduraService.getArmaduraById(idNumerico);
        if (!armadura) {
            return res.status(404).json({ error: "Armadura no encontrada" });
        }

        const updatedArmadura = await armaduraService.updateArmadura(idNumerico, armaduraData);

        return res.status(200).json(updatedArmadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar la armadura"
        });
    }
}

async function deleteArmadura(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const armadura = await armaduraService.getArmaduraById(idNumerico);
        if (!armadura) {
            return res.status(404).json({ error: "Armadura no encontrada" });
        }

        await armaduraService.deleteArmadura(idNumerico);

        return res.status(200).json(armadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar la armadura"
        });
    }
}

export default {
    getArmaduras,
    getArmaduraById,
    createArmadura,
    updateArmadura,
    deleteArmadura
};
