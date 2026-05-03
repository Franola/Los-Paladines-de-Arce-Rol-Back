import { handlePrismaError } from "../utils/prismaErrorHandler.js";
import { armaService } from "../repository/ArmaRepository.js";

async function getArmas(req, res) {
    try{
        const armas = await armaService.getArmas();

        return res.status(200).json(armas);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al obtener las armas");
    }
}

async function getArmaById(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const arma = await armaService.getArmaById(idNumerico);

        if (!arma) {
            return res.status(404).json({ error: "Arma no encontrado" });
        }

        return res.status(200).json(arma);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al obtener el arma");
    }
}

async function createArma(req, res) {
    try {
        const armaData = req.body;

        if (armaData.danio !== undefined) armaData.danio = parseInt(armaData.danio);
        if (armaData.peso !== undefined) armaData.peso = parseInt(armaData.peso);
        if (armaData.categoriaArmaId !== undefined) armaData.categoriaArmaId = parseInt(armaData.categoriaArmaId);
        if (armaData.materialId !== undefined) armaData.materialId = parseInt(armaData.materialId);

        if (!armaData.nombre || !armaData.imagen || armaData.danio < 0 || armaData.peso < 0 || !armaData.categoriaArmaId || !armaData.materialId) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete armaData.id;

        const newArma = await armaService.createArma(armaData);
        
        return res.status(201).json(newArma);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al crear el arma");
    }
}

async function updateArma(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);
        const armaData = req.body;

        if (armaData.danio !== undefined) armaData.danio = parseInt(armaData.danio);
        if (armaData.peso !== undefined) armaData.peso = parseInt(armaData.peso);
        if (armaData.categoriaArmaId !== undefined) armaData.categoriaArmaId = parseInt(armaData.categoriaArmaId);
        if (armaData.materialId !== undefined) armaData.materialId = parseInt(armaData.materialId);

        if (!armaData.nombre || !armaData.imagen || armaData.danio < 0 || armaData.peso < 0 || !armaData.categoriaArmaId || !armaData.materialId) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }

        delete armaData.id;

        const arma = await armaService.getArmaById(idNumerico);
        if (!arma) {
            return res.status(404).json({ error: "Arma no encontrado" });
        }

        const updatedArma = await armaService.updateArma(idNumerico, armaData);

        return res.status(200).json(updatedArma);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al actualizar el arma");
    }
}

async function deleteArma(req, res) {
    try {
        const { id } = req.params;
        const idNumerico = parseInt(id);

        const arma = await armaService.getArmaById(idNumerico);
        if (!arma) {
            return res.status(404).json({ error: "Arma no encontrado" });
        }

        await armaService.deleteArma(idNumerico);

        return res.status(200).json(arma);
    }
    catch (error) {
        return handlePrismaError(error, res, "Error al eliminar el arma");
    }
}

export default {
    getArmas,
    getArmaById,
    createArma,
    updateArma,
    deleteArma
};
