import { tipoArmaduraService } from "../repository/TipoArmaduraRepository.js";

async function getTiposArmadura(req, res) {
    try{
        const tiposArmadura = await tipoArmaduraService.getTiposArmadura();

        return res.status(200).json(tiposArmadura);
    }
    catch (error) {
        return res.status(500).json({ 
            error: "Error al obtener los tipos de armadura" 
        });
    }
}

async function getTipoArmaduraById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const tipoArmadura = await tipoArmaduraService.getTipoArmaduraById(idNumerico);

        if (!tipoArmadura) {
            return res.status(404).json({ error: "Tipo de armadura no encontrado" });
        }

        return res.status(200).json(tipoArmadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al obtener el tipo de armadura"
        });
    }
}

async function createTipoArmadura(req, res) {
    try {
        const tipoArmaduraData = req.body;

        if (!tipoArmaduraData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete tipoArmaduraData.id;

        const newTipoArmadura = await tipoArmaduraService.createTipoArmadura(tipoArmaduraData);
        
        return res.status(201).json(newTipoArmadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al crear el tipo de armadura"
        });
    }
}

async function updateTipoArmadura(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const tipoArmaduraData = req.body;

        if (!tipoArmaduraData.descripcion) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete tipoArmaduraData.id;

        const tipoArmadura = await tipoArmaduraService.getTipoArmaduraById(idNumerico);
        if (!tipoArmadura) {
            return res.status(404).json({ error: "Tipo de armadura no encontrado" });
        }

        const updatedTipoArmadura = await tipoArmaduraService.updateTipoArmadura(idNumerico, tipoArmaduraData);

        return res.status(200).json(updatedTipoArmadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al actualizar el tipo de armadura"
        });
    }
}

async function deleteTipoArmadura(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const tipoArmadura = await tipoArmaduraService.getTipoArmaduraById(idNumerico);
        if (!tipoArmadura) {
            return res.status(404).json({ error: "Tipo de armadura no encontrado" });
        }

        await tipoArmaduraService.deleteTipoArmadura(idNumerico);

        return res.status(200).json(tipoArmadura);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al eliminar el tipo de armadura"
        });
    }
}

export default {
    getTiposArmadura,
    getTipoArmaduraById,
    createTipoArmadura,
    updateTipoArmadura,
    deleteTipoArmadura
};